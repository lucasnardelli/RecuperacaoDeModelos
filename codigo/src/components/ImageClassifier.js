import {torch, torchvision, media, MobileModel } from 'react-native-pytorch-core';
import * as ImageNetClasses from './ImageNetClasses.json';

const T = torchvision.transforms;
const MODEL_URL = 'https://github.com/lucasnardelli/testeDownload/raw/main/final.ptl';
let model = null;



export default async function classifyImage(image) {
  const width = image.getWidth();
  const height = image.getHeight();
  const blob = media.toBlob(image);

  let tensor = torch.fromBlob(blob, [height, width, 3]);
  console.log("aopa")
  tensor = tensor.permute([2, 0, 1]);
  console.log(tensor)
  tensor = tensor.div(255);

  const resize = T.resize(224);
  tensor = resize(tensor);

  const normalize = T.normalize((0.485, 0.456, 0.406), (0.229, 0.224, 0.225));
  tensor = normalize(tensor);

  tensor = tensor.unsqueeze(0);

  if (model == null) {
    const filePath = await MobileModel.download(MODEL_URL);
    model = await torch.jit._loadForMobile(filePath);
  }

  const output = await model.forward(tensor);
  console.log("output: " + maxIdx)
  const maxIdx = output.argmax().item();
  console.log("maxid: " + maxIdx)

  return ImageNetClasses[maxIdx];
}