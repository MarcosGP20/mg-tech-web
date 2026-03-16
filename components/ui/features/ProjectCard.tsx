import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

// Definimos la estructura de datos (Props)
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border-zinc-200 hover:shadow-xl transition-all duration-300 group">
      {/* Imagen del Proyecto */}
      <div className="relative h-48 w-full overflow-hidden bg-zinc-100">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <CardHeader className="space-y-2 p-5">
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-[10px] uppercase tracking-wider"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="text-xl font-bold text-zinc-900">{title}</h3>
      </CardHeader>

      <CardContent className="px-5 pb-5">
        <p className="text-sm text-zinc-600 leading-relaxed">{description}</p>
      </CardContent>

      <CardFooter className="px-5 pb-6 pt-0">
        <Button
          variant="outline"
          size="sm"
          className="w-full gap-2 text-xs font-semibold"
          asChild
        >
          <a href={projectUrl} target="_blank" rel="noopener noreferrer">
            Ver Proyecto <ExternalLink size={14} />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
