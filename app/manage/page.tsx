import { PortfolioFiles } from "@/components/portfolio-files"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ManagePage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
          <h1 className="text-3xl font-bold mb-2">Manage Portfolio Files</h1>
          <p className="text-muted-foreground">
            Upload your profile image and CV here. Once uploaded, they will be displayed on your portfolio.
          </p>
        </div>

        <div className="border rounded-lg p-6 bg-card">
          <PortfolioFiles />
        </div>
      </div>
    </div>
  )
}
