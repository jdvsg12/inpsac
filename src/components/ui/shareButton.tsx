'use client'

import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useToast } from "@/hooks/use-toast"
import { Share, Twitter, Facebook, Linkedin, Link } from "lucide-react"
import { usePathname } from "next/navigation"

function ShareButton() {
    const pathname = usePathname()
    const { toast } = useToast()
    const shareUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}${pathname}`
    const shareTitle = "Check out this page!"
    const shareText = "I found this interesting page and thought you might like it."

    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({ title: shareTitle, text: shareText, url: shareUrl })
            } catch (error) {
                console.error('Error sharing:', error)
            }
        } else {
            handleCopyLink()
        }
    }

    const handleTwitterShare = () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
        window.open(twitterUrl, '_blank')
    }

    const handleFacebookShare = () => {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
        window.open(facebookUrl, '_blank')
    }

    const handleLinkedInShare = () => {
        const linkedInUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}&summary=${encodeURIComponent(shareText)}`
        window.open(linkedInUrl, '_blank')
    }

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl)
            toast({
                title: "Link copied!",
                description: "The page URL has been copied to your clipboard.",
            })
        } catch (error) {
            console.error('Error copying link:', error)
            toast({
                title: "Copy failed",
                description: "There was an error copying the link. Please try again.",
                variant: "destructive",
            })
        }
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="icon">
                    <Share className="h-4 w-4" />
                    <span className="sr-only">Share</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-2">
                <div className="grid grid-flow-col gap-2">
                    <Button className="hover:text-white" variant="ghost" size="icon" onClick={handleNativeShare} title="Share">
                        <Share className="h-4 w-4 hover:text-white" />
                        <span className="sr-only">Share</span>
                    </Button>
                    <Button className="hover:text-white" variant="ghost" size="icon" onClick={handleTwitterShare} title="Share on Twitter">
                        <Twitter className="h-4 w-4 hover:text-white" />
                        <span className="sr-only">Share on Twitter</span>
                    </Button>
                    <Button className="hover:text-white" variant="ghost" size="icon" onClick={handleFacebookShare} title="Share on Facebook">
                        <Facebook className="h-4 w-4 hover:text-white" />
                        <span className="sr-only">Share on Facebook</span>
                    </Button>
                    <Button className="hover:text-white" variant="ghost" size="icon" onClick={handleLinkedInShare} title="Share on LinkedIn">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">Share on LinkedIn</span>
                    </Button>
                    <Button className="hover:text-white" variant="ghost" size="icon" onClick={handleCopyLink} title="Copy link">
                        <Link className="h-4 w-4  hover:text-white" />
                        <span className="sr-only">Copy link</span>
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default ShareButton