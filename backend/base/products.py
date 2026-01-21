from django import models

class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    rating = models.FloatField()
    count_in_stock = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    
# class UserProfile(models.Model):
#     user = models.OneToOneField('auth.User', on_delete=models.CASCADE)
#     bio = models.TextField(blank=True, null=True)
#     location = models.CharField(max_length=100, blank=True, null=True)
#     birth_date = models.DateField(blank=True, null=True)

#     def __str__(self):
#         return self.user.username