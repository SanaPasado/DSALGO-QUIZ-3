import os
import random
from django.db import models


def get_filename_ext(filepath):
    base_name = os.path.basename(filepath)
    name, ext = os.path.splitext(base_name)
    return name, ext


def upload_image_path(instance, filename):
    new_filename = random.randint(1, 2541781232)
    name, ext = get_filename_ext(filename)
    final_filename = '{new_filename}{ext}'.format(new_filename=new_filename, ext=ext)
    return 'img/{new_filename}/{final_filename}'.format(
        new_filename=new_filename,
        final_filename=final_filename,
    )
#these functions are for generating image paths

class Service(models.Model):
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to=upload_image_path, null = True, blank = True)
    description = models.TextField()
    rating = models.IntegerField(default = 5)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    duration_of_service = models.CharField(max_length=100)
    name_of_the_expert = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name

