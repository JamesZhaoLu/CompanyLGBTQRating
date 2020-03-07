from PIL import Image

# Opens a image in RGB mode
im = Image.open(r"/Users/jameslu/Documents/GitHub/CompanyLGBTQRating/CEI-2020.png")

# Size of the image in pixels (size of orginal image)
# (This is not mandatory)
width, height = im.size

# Setting the points for cropped image
left = 995
top = 210
right = 1550
bottom = 1145

NUM_CELLS = 13
NUM_ROWS = 30

CELL_HEIGHT = 31.25
CELL_WIDTH = 42.75

CELL_HEIGHT_BUFFER = 7
CELL_WIDTH_BUFFER = 9
CELL_WIDTH_RIGHT_BUFFER = 12

cropped_imgs = []

# Cropped image of above dimension
# (It will not change orginal image)
# im_large = im.crop((left, top, right, bottom))

for i in range(NUM_ROWS):
    cropped_row = []
    for j in range(NUM_CELLS):

        left_bound = left + j*CELL_WIDTH + CELL_WIDTH_BUFFER
        right_bound = left + (j+1)*CELL_WIDTH - CELL_WIDTH_RIGHT_BUFFER
        top_bound = top + i*CELL_HEIGHT + CELL_HEIGHT_BUFFER
        bottom_bound = top + (i+1)*CELL_HEIGHT - CELL_HEIGHT_BUFFER



        cell = im.crop((left_bound, top_bound, right_bound, bottom_bound))
        cropped_row.append(cell)

    cropped_imgs.append(cropped_row)

cell = cropped_imgs[-5][-3]

cell.show()


# Shows the image in image viewer
# im1.show()
