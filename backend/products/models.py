from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=200)
    image = models.CharField(max_length=500, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    category = models.CharField(max_length=80, blank=True, null=True)
    price = models.FloatField(default=0.0)
    countInStock = models.IntegerField(default=0)
    rating = models.FloatField(default=0.0)
    numReviews = models.IntegerField(default=0)

    def __str__(self):
        return self.name
