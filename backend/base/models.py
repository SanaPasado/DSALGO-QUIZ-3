from django.db import models

class Service(models.Model):
    name = models.CharField(max_length=200)
    image = models.CharField(max_length=500, blank=True, null=True)
    description = models.TextField()
    rating = models.IntegerField(default=0)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    duration_of_service = models.CharField(max_length=100)
    name_of_the_expert = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name

