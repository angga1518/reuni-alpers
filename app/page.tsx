"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarDays, Clock, MapPin, Phone, CreditCard, Users, Music, Gift, Gamepad2 } from "lucide-react"

export default function AlpersReunionPage() {
  const [formData, setFormData] = useState({
    nama: "",
    angkatan: "",
    ukuranBaju: "",
  })

  const handleSubmit = () => {
    if (!formData.nama || !formData.angkatan || !formData.ukuranBaju) {
      alert("Mohon lengkapi semua data!")
      return
    }

    const message = `Halo, saya ingin mendaftar untuk Reuni Akbar ALPERS: \n\n

Nama: ${formData.nama} \n
Angkatan: ${formData.angkatan} \n
Ukuran Baju: ${formData.ukuranBaju} \n\n

Mohon informasi lebih lanjut untuk proses pendaftaran. Terima kasih!`

    const whatsappUrl = `https://wa.me/62811820944?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/70 text-primary-foreground">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute top-20 right-0 w-24 h-24 bg-white/15 rounded-full translate-x-12"></div>
          <div className="absolute bottom-0 left-1/3 w-40 h-40 bg-white/10 rounded-full translate-y-20"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/20 rounded-full"></div>
        </div>

        <div className="relative max-w-md mx-auto px-4 py-12 text-center">
          <div className="mb-6">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl scale-110"></div>
              <img
                src="/alpers-logo.png"
                alt="ALPERS Logo"
                className="relative w-24 h-24 mx-auto mb-4 drop-shadow-lg"
              />
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl font-bold mb-3 text-balance drop-shadow-sm">REUNI AKBAR</h1>
            <div className="text-4xl font-black text-yellow-300 drop-shadow-md tracking-wider">ALPERS</div>
            <p className="text-lg opacity-95 text-balance font-medium mt-4">Semua Berawal Dari Sini</p>
          </div>
        </div>
      </header>

      <main className="relative px-4 py-6 space-y-6">
        <div className="max-w-md mx-auto space-y-6">
          {/* Subtle Background Art - now covers full width */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 -left-20 w-48 h-48 bg-primary/8 rounded-full blur-3xl"></div>
            <div className="absolute top-40 -right-16 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
            <div className="absolute top-80 left-1/4 w-32 h-32 bg-primary/6 rounded-full blur-xl"></div>
            <div className="absolute bottom-40 -left-12 w-44 h-44 bg-accent/8 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-primary/7 rounded-full blur-2xl"></div>
            <div className="absolute top-60 right-0 w-28 h-28 bg-yellow-400/5 rounded-full blur-2xl"></div>
            <div className="absolute top-96 left-1/2 w-52 h-52 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-60 left-0 w-40 h-40 bg-accent/6 rounded-full blur-2xl"></div>

            {/* Subtle dot pattern */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, rgb(59 130 246) 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>

          {/* Event Info Card */}
          <Card className="relative border-primary/20 bg-background/95 backdrop-blur-sm">
            <CardHeader className="text-center bg-accent/10">
              <CardTitle className="text-primary text-xl">Informasi Acara</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-center gap-3">
                <CalendarDays className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold">Sabtu, 4 Oktober 2025</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-semibold">14:00 - 20:00 WIB</p>
                  <p className="text-sm text-muted-foreground">Registrasi mulai jam 13:00 WIB</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-balance">Thamrin 10 Food & Creative Park</p>
                  <p className="text-sm text-muted-foreground">Jakarta Pusat</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Activities Card */}
          <Card className="relative bg-background/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Users className="w-5 h-5" />
                Rangkaian Acara
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center justify-center py-3 px-4 bg-primary/5 rounded-lg text-primary">
                  <Gamepad2 className="w-4 h-4 mr-2" />
                  <span className="font-medium">Games</span>
                </div>
                <div className="flex items-center justify-center py-3 px-4 bg-primary/5 rounded-lg text-primary">
                  <Music className="w-4 h-4 mr-2" />
                  <span className="font-medium">Musik</span>
                </div>
                <div className="flex items-center justify-center py-3 px-4 bg-primary/5 rounded-lg text-primary">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="font-medium">Dance</span>
                </div>
                <div className="flex items-center justify-center py-3 px-4 bg-primary/5 rounded-lg text-primary">
                  <Gift className="w-4 h-4 mr-2" />
                  <span className="font-medium">Bazar</span>
                </div>
              </div>
              <div className="flex items-center justify-center py-3 px-4 mt-3 bg-accent/20 rounded-lg text-accent-foreground">
                <Gift className="w-4 h-4 mr-2" />
                <span className="font-medium">Doorprize</span>
              </div>
            </CardContent>
          </Card>

          {/* Registration Card */}
          <Card className="relative border-accent/50 bg-background/95 backdrop-blur-sm">
            <CardHeader className="bg-accent/10">
              <CardTitle className="text-primary flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Pendaftaran & Biaya
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">Rp 100.000</p>
                <p className="text-sm text-muted-foreground">Harga Tiket Masuk (HTM)</p>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <p className="font-semibold mb-2 text-center">Fasilitas yang Didapat:</p>
                <div className="flex justify-center gap-4 text-sm">
                  <span>• Kaos</span>
                  <span>• Snack</span>
                  <span>• Drink</span>
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-semibold text-primary">Informasi Pembayaran:</p>
                <div className="bg-card p-3 rounded border">
                  <p className="text-sm">
                    <strong>Rekening:</strong> 2300480627
                  </p>
                  <p className="text-sm">
                    <strong>Atas Nama:</strong> Indiyah Dwi Agustini
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Card */}
          <Card className="relative bg-background/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Narahubung
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-semibold">Indiyah Dwi Agustini</p>
                    <p className="text-sm text-muted-foreground">Contact Person</p>
                  </div>
                  <a href="https://wa.me/62811820944" className="text-primary hover:text-primary/80 font-mono text-sm">
                    +62 811-820-944
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Registration Form Card */}
          <Card className="relative border-primary/20 bg-background/95 backdrop-blur-sm">
            <CardHeader className="text-center bg-primary/10">
              <CardTitle className="text-primary text-xl">Daftar Sekarang</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nama">Nama Lengkap</Label>
                <Input
                  id="nama"
                  placeholder="Masukkan nama lengkap"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="angkatan">Angkatan</Label>
                <Input
                  id="angkatan"
                  placeholder="Contoh: 1995, 2000, 2005"
                  value={formData.angkatan}
                  onChange={(e) => setFormData({ ...formData, angkatan: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ukuran">Ukuran Baju</Label>
                <Select
                  value={formData.ukuranBaju}
                  onValueChange={(value) => setFormData({ ...formData, ukuranBaju: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih ukuran baju" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="S">S</SelectItem>
                    <SelectItem value="M">M</SelectItem>
                    <SelectItem value="L">L</SelectItem>
                    <SelectItem value="XL">XL</SelectItem>
                    <SelectItem value="XXL">XXL</SelectItem>
                    <SelectItem value="XXXL">XXXL</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors mt-6"
              >
                Daftar Sekarang
              </button>
            </CardContent>
          </Card>

          {/* Footer */}
          <footer className="text-center py-6 text-sm text-muted-foreground border-t">
            <p className="text-balance">Alumni Perwira Sepuluh ALPERS</p>
            <p className="text-balance">SMPN 4 Jakarta</p>
            <p className="mt-2 text-xs">© 2025 ALPERS Reunion Committee</p>
          </footer>
        </div>
      </main>
    </div>
  )
}
