select pictureId, picture.itemId,item.title, picture.displayOrder, item.listPrice

from picture


join item on
picture.itemId = item.itemId

where 
# picture.createDate > '2024-01-01' and 
item.quantity > 0 and
item.isVisible = 1

order by item.modifyDate desc;