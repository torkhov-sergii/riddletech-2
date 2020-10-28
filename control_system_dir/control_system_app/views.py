from django.shortcuts import render
from .models import Quest, Room, RiddleType, Riddle, Hint, Signal, Bypass


def index(request):
    quest = Quest.objects.all()
    room = Room.objects.all()
    riddleType = RiddleType.objects.all()
    riddle = Riddle.objects.all()
    hint = Hint.objects.all()
    signal = Signal.objects.all()
    bypass = Bypass.objects.all()
    return render(request, 'index.html',
                  {'quest': quest,
                   'room': room,
                   'riddleType': riddleType,
                   'riddle': riddle,
                   'hint': hint,
                   'signal': signal,
                   'bypass': bypass})
