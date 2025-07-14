
"use client"

import { useState, useRef } from "react";
import type { User } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Image as ImageIcon, Video, X } from "lucide-react";
import Image from "next/image";

interface CreatePostFormProps {
  user: User;
  onAddPost: (content: string, file: File | null) => Promise<void>;
}

export function CreatePostForm({ user, onAddPost }: CreatePostFormProps) {
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [fileType, setFileType] = useState<'image' | 'video' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
        setFile(selectedFile);
        setFilePreview(URL.createObjectURL(selectedFile));
        if (selectedFile.type.startsWith('image/')) {
            setFileType('image');
        } else if (selectedFile.type.startsWith('video/')) {
            setFileType('video');
        } else {
            // Reset if the file type is not supported
            handleRemoveFile();
        }
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setFilePreview(null);
    setFileType(null);
    if (fileInputRef.current) {
        fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() && !file) return;

    setIsSubmitting(true);
    try {
      await onAddPost(content, file);
      setContent("");
      handleRemoveFile();
    } catch (error) {
      // The error is now handled and displayed by the parent component (TodayPage).
      // We just need to catch it here to ensure the loading state is reset.
      console.error("Error submitting post from form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const userInitial = user.name ? user.name.charAt(0) : "🥳";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex items-start gap-4">
            <Avatar className="w-10 h-10 border-2 border-primary/50">
            <AvatarImage src={user.photoURL ?? `https://placehold.co/40x40/FF69B4/FFFFFF?text=${userInitial}`} alt={user.name ?? ""} />
            <AvatarFallback className="bg-secondary text-secondary-foreground">{userInitial}</AvatarFallback>
            </Avatar>
            <Textarea
            placeholder={`What's happening today, ${user.name}?`}
            className="flex-1 p-3 rounded-lg bg-secondary border-border focus:outline-none focus:ring-2 focus:ring-primary text-secondary-foreground placeholder:text-muted-foreground text-sm min-h-[8rem]"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={isSubmitting}
            />
        </div>
        
        {filePreview && (
          <div className="relative w-full max-h-96 rounded-lg border overflow-hidden">
             {fileType === 'image' && <Image src={filePreview} alt="Preview" width={500} height={500} className="w-full h-auto object-contain" />}
             {fileType === 'video' && <video src={filePreview} controls className="w-full h-auto" />}
            <Button
              type="button"
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2 h-8 w-8 rounded-full"
              onClick={handleRemoveFile}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Remove file</span>
            </Button>
          </div>
        )}

        <div className="flex justify-between items-center">
            <div className="flex gap-2">
                <Button type="button" size="icon" variant="ghost" onClick={() => fileInputRef.current?.click()} disabled={isSubmitting}>
                    <ImageIcon className="text-green-500" />
                </Button>
                 <Button type="button" size="icon" variant="ghost" onClick={() => fileInputRef.current?.click()} disabled={isSubmitting}>
                    <Video className="text-red-500" />
                </Button>
                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*,video/*"
                    onChange={handleFileChange}
                    disabled={isSubmitting}
                />
            </div>
            <Button type="submit" disabled={isSubmitting || (!content.trim() && !file)}>
                {isSubmitting ? "Posting..." : "Post"}
            </Button>
        </div>
    </form>
  );
}
