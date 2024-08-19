import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ButtonLoading() {
  return (
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-full animate-spin" />
      Please wait
    </Button>
  )
}
