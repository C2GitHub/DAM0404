const open1 = [0xFE, 0x05, 0x00, 0x00, 0xFF, 0x00, 0x98, 0x35]
const open2 = [0xFE, 0x05, 0x00, 0x01, 0xFF, 0x00, 0xC9, 0xF5]
const open3 = [0xFE, 0x05, 0x00, 0x02, 0xFF, 0x00, 0x39, 0xF5]
const open1 = [0xFE, 0x05, 0x00, 0x03, 0xFF, 0x00, 0x68, 0x35]

const close1 = [0xFE, 0x05, 0x00, 0x00, 0x00, 0x00, 0xD9, 0xC5]
const close2 = [0xFE, 0x05, 0x00, 0x01, 0x00, 0x00, 0x88, 0x05]
const close3 = [0xFE, 0x05, 0x00, 0x02, 0x00, 0x00, 0x78, 0x05]
const close4 = [0xFE, 0x05, 0x00, 0x03, 0x00, 0x00, 0x29, 0xC5]

const read1 = [0xFE, 0x02, 0x00, 0x00, 0x00, 0x01, 0xAD, 0xC5]
const read2 = [0xFE, 0x02, 0x00, 0x01, 0x00, 0x01, 0xFC, 0x05]
const read3 = [0xFE, 0x02, 0x00, 0x02, 0x00, 0x01, 0x0C, 0x05]
const read4 = [0xFE, 0x02, 0x00, 0x03, 0x00, 0x01, 0x5D, 0xC5]

// 全开发送码：FE 0F 00 00 00 04 01 FF 31 D2
// 全断发送码：FE 0F 00 00 00 04 01 00 71 92
const openAll = [0xFE, 0x02, 0x00, 0x00, 0x00, 0x01, 0xAD, 0xC5]
const closeAll = [0xFE, 0x02, 0x00, 0x01, 0x00, 0x01, 0xFC, 0x05]
const readAll = [0xFE, 0x02, 0x00, 0x02, 0x00, 0x01, 0x0C, 0x05]

// 闪开发送码：FE 10 00 03 00 02 04 00 04 00 0A 00 D8
// 闪断发送码：FE 10 00 03 00 02 04 00 02 00 14 21 62