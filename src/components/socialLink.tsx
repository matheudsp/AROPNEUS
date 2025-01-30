import React from "react";
import { Button, Link } from "@heroui/react";
import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

type ButtonSize = "sm" | "lg" | "md" | undefined;

interface SocialLinkProps {
  href: string;
  icon?: ReactNode;
  size?: ButtonSize;
  image?: StaticImageData;
  className?: string;
}

export function SocialLink({ href, icon, size, image, className}: SocialLinkProps) {
  return (
    <Button size={size} variant="shadow" as={Link} href={href} target="_blank" className={cn(
      "h-14",
      className
    )}>
      {image ? (
        <Image src={image} alt="Social Link" className="h-full w-full object-contain" />
      ) : (
        icon
      )}
    </Button>
  );
}