with open('input.txt') as file:
    dimensions_list = file.readlines()

surface_area = 0
for dimension in dimensions_list:
    sizes = dimension.split('x')
    integer_sizes = list(map(int, sizes))
    length, width, height = integer_sizes
    box_area = 2*length*width + 2*width*height + 2*height*length
    surface_area += box_area + min(length*width, width*height, height*length)

print(surface_area)
