import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  contribution: string;
  tags: string[];
  imageUrl: string;
}

export default function ProjectCard({
  title,
  description,
  contribution,
  tags,
  imageUrl,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border-zinc-200 hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-48 w-full overflow-hidden bg-zinc-100">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
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

      <CardContent className="space-y-5 px-5 pb-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
            Detalle del proyecto
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            {description}
          </p>
        </div>

        <div className="rounded-lg bg-zinc-50 p-4">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={17} className="shrink-0 text-emerald-600" />
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">
              Aporte de MG Tech
            </p>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-zinc-700">
            {contribution}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
