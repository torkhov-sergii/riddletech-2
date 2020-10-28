from django.db import models
from django.core.validators import FileExtensionValidator
from django.conf import settings
from django.utils.translation import ugettext_lazy as _
from django.utils.crypto import get_random_string

import os


def upload_to_hints(instance, filename):
    """  Формирование адресса: MEDIA_ROOT/hints/<unique_name> """

    file_name = "{}{}".format(get_random_string(length=6), os.path.splitext(filename)[1])
    path = os.path.join('hints', file_name)

    if os.path.isfile(os.path.join(settings.MEDIA_ROOT, path)):
        os.remove(os.path.join(settings.MEDIA_ROOT, path))
    return path


def upload_to_music(instance, filename):
    """  Формирование адресса: MEDIA_ROOT/music/<unique_name> """

    try:
        print(instance.sound)
    except:
        pass

    file_name = "{}{}".format(get_random_string(length=6), os.path.splitext(filename)[1])
    path = os.path.join('music', file_name)

    if os.path.isfile(os.path.join(settings.MEDIA_ROOT, path)):
        os.remove(os.path.join(settings.MEDIA_ROOT, path))
    return path


class Quest(models.Model):
    """ Квест комната """
    PLAYERS_NUMBER = (
        (2, 'Two'),
        (3, 'Three'),
        (4, 'Four'),
        (5, 'Five'),
        (6, 'Six'),
    )

    CHOICES_SERIAL_NUMBER = [(i, i) for i in range(1, 21)]

    id = models.AutoField('Unique identificator', primary_key=True)
    serialNumber = models.IntegerField('Quest room serial number',
                                       null=True,
                                       choices=CHOICES_SERIAL_NUMBER,
                                       default=1)
    title = models.CharField('Quest room name', max_length=50)
    startGame = models.BooleanField('Game state: running / stopped', default=False)
    resetGame = models.BooleanField('Restarting the game: is a restart required?', default=False)
    playersNumber = models.IntegerField('Number of players', choices=PLAYERS_NUMBER, default=2)
    description = models.CharField('Description', default='', max_length=100, blank=True)

    def __unicode__(self):
        return self.title

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Quest room'
        verbose_name_plural = 'Quest rooms'


class Room(models.Model):
    """ Помещение """
    id = models.AutoField('Unique identificator', primary_key=True)
    serialNumber = models.IntegerField('Room serial number', null=True, blank=True)
    title = models.CharField('Room name', max_length=50)
    description = models.CharField('Description', default='', max_length=100, blank=True)
    quest_id = models.ForeignKey(Quest, verbose_name='quest room', blank=True, on_delete=models.SET_NULL, null=True)

    def __unicode__(self):
        return self.title

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Room'
        verbose_name_plural = 'Rooms'


class RiddleType(models.Model):
    """ Типы загадок """
    id = models.AutoField(primary_key=True)
    title = models.CharField('Riddle type', max_length=50)
    description = models.CharField('Description', default='', max_length=100, blank=True)

    def __unicode__(self):
        return self.title

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Riddle type'
        verbose_name_plural = 'Riddle types'


class Riddle(models.Model):
    """ Загадка """
    id = models.AutoField('Unique identificator', primary_key=True)
    serialNumber = models.IntegerField('Riddle serial number', null=True, blank=True)
    title = models.CharField('Riddle name', max_length=50)
    state = models.BooleanField('Riddle state: solved / not solved', default=False)
    type_id = models.ForeignKey(RiddleType, verbose_name='riddle type', blank=True,
                                on_delete=models.SET_NULL, null=True)
    description = models.CharField('Description', default='', max_length=100, blank=True)
    room_id = models.ForeignKey(Room, verbose_name='room', blank=True, on_delete=models.SET_NULL, null=True)

    def __unicode__(self):
        return self.title

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Riddle'
        verbose_name_plural = 'Riddles'


class Signal(models.Model):
    """ Сигнал """
    id = models.AutoField('Unique identificator', primary_key=True)
    serialNumber = models.IntegerField('Signal serial number', null=True, blank=True)
    title = models.CharField('Signal name', max_length=50)
    state = models.BooleanField(default=False)
    description = models.CharField('Description', default='', max_length=100, blank=True)
    riddle_id = models.ForeignKey(Riddle, verbose_name='riddle', blank=True, on_delete=models.SET_NULL, null=True)

    def __unicode__(self):
        return self.title

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Signal'
        verbose_name_plural = 'Signals'


class Hint(models.Model):
    """ Подсказка """
    id = models.AutoField('Unique identificator', primary_key=True)
    serialNumber = models.IntegerField('Hint serial number', null=True, blank=True)
    title = models.CharField('Hint name', max_length=50)
    state = models.BooleanField(default=False)
    sound = models.FileField(_("hint file"),
                             validators=[FileExtensionValidator(['mp3'])],
                             upload_to=upload_to_hints)
    description = models.CharField('Description', default='', max_length=100, blank=True)
    riddle_id = models.ForeignKey(Riddle, verbose_name='riddle', blank=True, on_delete=models.SET_NULL, null=True)

    def __unicode__(self):
        return self.title

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Hint'
        verbose_name_plural = 'Hints'


class Music(models.Model):
    """ Музыка """
    id = models.AutoField('Unique identificator', primary_key=True)
    serialNumber = models.IntegerField('Music serial number', null=True, blank=True)
    title = models.CharField('Music name', max_length=50)
    state = models.BooleanField(default=False)
    sound = models.FileField(_("music file"),
                             validators=[FileExtensionValidator(['mp3'])],
                             upload_to=upload_to_music)
    description = models.CharField('Description', default='', max_length=100, blank=True)
    riddle_id = models.ForeignKey(Riddle, verbose_name='riddle', blank=True, on_delete=models.SET_NULL, null=True)

    def __unicode__(self):
        return self.title

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Music'
        verbose_name_plural = 'Music'


class Bypass(models.Model):
    """ Пропуск хода """
    id = models.AutoField('Unique identificator', primary_key=True)
    serialNumber = models.IntegerField('Bypass serial number', null=True, blank=True)
    title = models.CharField('Bypass name', max_length=50)
    state = models.BooleanField(default=False)
    description = models.CharField('Description', default='', max_length=100, blank=True)
    riddle_id = models.ForeignKey(Riddle, verbose_name='riddle', blank=True, on_delete=models.SET_NULL, null=True)

    def __unicode__(self):
        return self.title

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Bypass'
        verbose_name_plural = 'Bypasses'
