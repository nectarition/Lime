export interface LimePackageInfo {
  title: string
  description: string
  items: Array<{
    id: string
    name: string
    link: string
  }>
}

export interface LimeSerial {
  expiredAt: Date
  packageId: string
}
