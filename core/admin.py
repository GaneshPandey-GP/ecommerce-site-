from django.contrib import admin
from core.models import Item, OrderItem, Order, Category

class ItemAdmin(admin.ModelAdmin):
    list_display = [
        'item_name',
        'price',
        'label',
        'category',
    ]
    list_filter = ['category', 'label']
    search_fields = ['item_name', 'category', 'price']

admin.site.register(Item, ItemAdmin)
admin.site.register(OrderItem)
admin.site.register(Category)

admin.site.register(Order)
