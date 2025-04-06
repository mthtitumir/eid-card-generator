import { ExternalLink } from "lucide-react";

const Footer = () => {
    return (
        <div className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
        <p className="flex items-center justify-center gap-1">
          Developed by
          <a
            href="https://www.linkedin.com/in/mthtitumir/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline inline-flex items-center"
          >
            M. T. H. Titumir
            <ExternalLink className="ml-1 h-3 w-3" />
          </a>
        </p>
      </div>
      )
}
export default Footer;