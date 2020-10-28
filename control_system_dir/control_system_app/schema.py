import graphene
from graphene_django.filter import DjangoFilterConnectionField
from graphene_django.types import DjangoObjectType

from control_system_app.models import Quest, Room, Riddle, RiddleType, Signal, Hint, Bypass


# class QuestNode(DjangoObjectType):
#     class Meta:
#         model = Quest
#         filter_fields = ['id', 'title']
#         interfaces = (graphene.relay.Node, )

class QuestType(DjangoObjectType):
    class Meta:
        model = Quest


class RoomType(DjangoObjectType):
    class Meta:
        model = Room


class CRiddleType(DjangoObjectType):
    class Meta:
        model = Riddle


class RiddleTypeType(DjangoObjectType):
    class Meta:
        model = RiddleType


class SignalType(DjangoObjectType):
    class Meta:
        model = Signal


class HintType(DjangoObjectType):
    class Meta:
        model = Hint


class BypassType(DjangoObjectType):
    class Meta:
        model = Bypass


class Query(graphene.ObjectType):
    # quest = graphene.relay.Node.Field(QuestNode)
    # quests = DjangoFilterConnectionField(QuestNode)

    # ----------------Quest-------------------------
    quest = graphene.Field(QuestType,
                           id=graphene.Int(),
                           title=graphene.String()
                           )

    def resolve_quest(self, info, **kwargs):
        id = kwargs.get('id')
        title = kwargs.get('title')

        if id is not None: return Quest.objects.get(id=id)

        if title is not None: return Quest.objects.get(title=title)

        return None

    quests = graphene.List(QuestType)

    def resolve_quests(self, info, **kwargs):
        return Quest.objects.all()

    # ----------------Room--------------------------
    room = graphene.Field(RoomType,
                          id=graphene.Int(),
                          )

    def resolve_room(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None: return Room.objects.get(id=id)

        return None

    rooms = graphene.List(RoomType)

    def resolve_rooms(self, info, **kwargs):
        return Room.objects.all()

    # ----------------Riddle--------------------------
    riddle = graphene.Field(CRiddleType,
                            id=graphene.Int(),
                            )

    def resolve_riddle(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None: return Riddle.objects.get(id=id)

        return None

    riddles = graphene.List(CRiddleType)

    def resolve_riddles(self, info, **kwargs):
        return Riddle.objects.all()

    # ----------------RiddleType--------------------------
    riddle_type = graphene.Field(RiddleTypeType,
                            id=graphene.Int(),
                            )

    def resolve_riddle_type(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None: return RiddleType.objects.get(id=id)

        return None

    # ----------------Signal--------------------------
    signal = graphene.Field(SignalType,
                            id=graphene.Int(),
                            )

    def resolve_signal(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None: return SignalType.objects.get(id=id)

        return None

    # signals = graphene.List(SignalType,
    #                         id=graphene.Int(),
    #                         )
    #
    # def resolve_signals(self, info, **kwargs):
    #     id = kwargs.get('id')
    #
    #     return Signal.objects.all()

    # ----------------Hint--------------------------
    hint = graphene.Field(HintType,
                            id=graphene.Int(),
                            )

    def resolve_hint(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None: return Hint.objects.get(id=id)

        return None

    # ----------------Bypass--------------------------
    bypass = graphene.Field(HintType,
                            id=graphene.Int(),
                            )

    def resolve_bypass(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None: return Bypass.objects.get(id=id)

        return None


class UpdateBypass(graphene.Mutation):
    bypass = graphene.Field(lambda: BypassType)
    ok = graphene.Boolean()

    class Arguments:
        id = graphene.String()
        state = graphene.Boolean()

    def mutate(self, info, id, state):
        bypass = Bypass.objects.get(pk=id)
        bypass.state = state
        bypass.save()
        ok = True
        return UpdateBypass(bypass=bypass, ok=ok)


class UpdateHint(graphene.Mutation):
    hint = graphene.Field(lambda: HintType)
    ok = graphene.Boolean()

    class Arguments:
        id = graphene.String()
        state = graphene.Boolean()

    def mutate(self, info, id, state):
        hint = Hint.objects.get(pk=id)
        hint.state = state
        hint.save()
        ok = True
        return UpdateHint(hint=hint, ok=ok)


class Mutations(graphene.ObjectType):
    update_bypass = UpdateBypass.Field()
    update_hint = UpdateHint.Field()