import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3' 
from PIL import Image
import numpy as np
import pandas as pd
from keras.models import load_model
import sys

image_path = 'data/test/'+sys.argv[1]
image = Image.open(image_path)

image = image.convert('L')
pixels = list(image.getdata())

df = pd.DataFrame({'Pixel': pixels})
xTest=df.values.reshape(-1,144,144,1)
xTest=xTest/255

model = load_model('model/model_cnn.h5')
testPredict=np.argmax(model.predict(xTest),axis=1)+1

print(testPredict[0])
