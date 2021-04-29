export class Kata {
  static validatePin(pin: string): boolean {
    return   /^\d{4}$/.test(pin) || /^\d{6}$/.test(pin)
  }
}
