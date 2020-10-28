from rest_framework import serializers
from .models import Quest, Room, Riddle, RiddleType, Signal, Hint, Bypass


# API через GenericAPIView

class QuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quest
        fields = ('id', 'title')


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'title', 'quest_id')


class RiddleTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = RiddleType
        fields = ('id', 'title')


class RiddleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Riddle
        fields = ('id', 'title', 'state', 'type_id', 'room_id')


class SignalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Signal
        fields = ('id', 'title', 'state', 'riddle_id')


class HintSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hint
        fields = ('id', 'title', 'number', 'state', 'sound', 'riddle_id')


class BypassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bypass
        fields = ('id', 'title', 'state', 'riddle_id')

