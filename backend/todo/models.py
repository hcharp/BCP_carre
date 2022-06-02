from django.db import models
from django.db import models
from viewflow.models import Process


class TodoProcess(Process):
    text = models.CharField(max_length=150)
    approved = models.BooleanField(default=False)

# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    test = models.IntegerField(default=0)

    def _str_(self):
        return self.title, " - ", self.test