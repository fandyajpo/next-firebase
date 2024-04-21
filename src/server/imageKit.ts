import ImageKit from "imagekit";

const imageKit = new ImageKit({
  publicKey: String(process.env.NEXT_PUBLIC_IMAGEKIT_KEY),
  privateKey: String(process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE),
  urlEndpoint: String(process.env.NEXT_PUBLIC_IMAGEKIT_ENDPOINT),
});

export default imageKit;
