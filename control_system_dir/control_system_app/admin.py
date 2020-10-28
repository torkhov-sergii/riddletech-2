from django.contrib import admin
from django import forms

from .models import Quest, Room, RiddleType, Riddle, Hint, Music, Signal, Bypass

admin.site.register(RiddleType)


@admin.register(Quest)
class QuestAdmin(admin.ModelAdmin):
    list_display = ('title', 'serialNumber', 'startGame', 'resetGame', 'playersNumber', 'description')
    ordering = ['serialNumber']
    fields = ['serialNumber', 'title', 'playersNumber', ('startGame', 'resetGame'), 'description']

    def formfield_for_choice_field(self, db_field, request, **kwargs):
        if db_field.name == "serialNumber":
            # kwargs['choices'] = (())
            Q = Quest.objects.all()

            try:
                hasattr(Q[0], 'serialNumber')
                kwargs['choices'] = (())
                for ch in range(max([q.serialNumber for q in Q]) + 1):
                    try:
                        if Q[ch]:
                            kwargs['choices'] += ((Quest.CHOICES_SERIAL_NUMBER[ch][0],
                                                   "{}: {}".format(Quest.CHOICES_SERIAL_NUMBER[ch][1], Q[ch].title)),)
                    except IndexError:
                        kwargs['choices'] += (Quest.CHOICES_SERIAL_NUMBER[ch],)
            except IndexError:
                # kwargs['choices'] += ('1',)
                pass
        return super().formfield_for_choice_field(db_field, request, **kwargs)


@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    list_display = ('title', 'quest_id', 'serialNumber', 'description')
    ordering = ['quest_id__serialNumber', 'serialNumber']
    fields = ['title', 'serialNumber', 'quest_id', 'description']


class RoomNameChoiceField(forms.ModelChoiceField):
    def label_from_instance(self, obj):
        if obj.quest_id is not None:
            return "{}: {}".format(obj.quest_id, obj.title)
        else:
            return "NO QUEST: {}".format(obj.title)


@admin.register(Riddle)
class RiddleAdmin(admin.ModelAdmin):
    list_display = ('title', 'display_quest', 'room_id', 'serialNumber', 'state', 'description')
    ordering = ['room_id__quest_id__serialNumber', 'room_id__serialNumber', 'serialNumber']

    def display_quest(self, obj):
        try:
            return obj.room_id.quest_id
        except:
            return "-"

    display_quest.short_description = 'Quest room'
    display_quest.admin_order_field = 'room_id__quest_id'

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == 'room_id':
            return RoomNameChoiceField(queryset=Room.objects.order_by('quest_id__serialNumber'),
                                       label='Room',
                                       required=False)  # Добавляет возможность полю быть пустым
        return super().formfield_for_foreignkey(db_field, request, **kwargs)


class QuestRoomNameChoiceField(forms.ModelChoiceField):
    def label_from_instance(self, obj):
        try:
            return "{}: {}: {}".format(obj.room_id.quest_id.title, obj.room_id, obj.title)
        except AttributeError:
            if obj.room_id is not None:
                return "NO QUEST: {}: {}".format(obj.room_id, obj.title)
            else:
                return "NO QUEST: NO ROOM: {}".format(obj.title)


@admin.register(Signal)
class SignalAdmin(admin.ModelAdmin):
    list_display = ('title', 'id', 'display_quest', 'display_room', 'display_riddle', 'serialNumber', 'state', 'description')
    ordering = ['riddle_id__room_id__quest_id__serialNumber', 'serialNumber']
    fields = ['title', 'serialNumber', 'state', 'riddle_id', 'description']

    def display_quest(self, obj):
        try:
            return obj.riddle_id.room_id.quest_id
        except:
            return "-"

    display_quest.short_description = 'Quest room'
    display_quest.admin_order_field = 'riddle_id__room_id__quest_id__serialNumber'

    def display_room(self, obj):
        try:
            return obj.riddle_id.room_id
        except:
            return "-"

    display_room.short_description = 'Room'
    display_room.admin_order_field = 'room_id'

    def display_riddle(self, obj):
        try:
            return obj.riddle_id
        except:
            return "-"

    display_riddle.short_description = 'Riddle'
    display_riddle.admin_order_field = 'riddle_id'

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == 'riddle_id':
            return QuestRoomNameChoiceField(queryset=Riddle.objects.order_by("room_id__quest_id__serialNumber",
                                                                             "room_id__serialNumber",
                                                                             "serialNumber"),
                                            label='Riddle',
                                            required=False)  # Добавляет возмжность полю быть пустым
        return super().formfield_for_foreignkey(db_field, request, **kwargs)


@admin.register(Bypass)
class BypassAdmin(SignalAdmin):
    pass


@admin.register(Hint)
class HintAdmin(SignalAdmin):
    list_display = ('title', 'display_quest', 'display_room', 'display_riddle', 'serialNumber',
                    'sound', 'state', 'description')
    fields = ['title', 'serialNumber', 'state', 'sound', 'riddle_id', 'description']


@admin.register(Music)
class MusicAdmin(SignalAdmin):
    list_display = ('title', 'display_quest', 'display_room', 'display_riddle', 'serialNumber',
                    'sound', 'state', 'description')
    fields = ['title', 'serialNumber', 'state', 'sound', 'riddle_id', 'description']
