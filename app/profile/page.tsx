import { Navigation } from "@/components/navigation"
import { ProfileHeader } from "@/components/profile-header"
import { ProfileContent } from "@/components/profile-content"
import { Footer } from "@/components/footer"

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <ProfileHeader />
        <div className="container mx-auto px-4 py-12">
          <ProfileContent />
        </div>
      </div>
      <Footer />
    </main>
  )
}
