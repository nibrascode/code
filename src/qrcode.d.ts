declare module "qrcode" {
  const QR: {
    toDataURL: (text: string, opts?: { margin?: number; width?: number }) => Promise<string>;
  };
  export default QR;
}
