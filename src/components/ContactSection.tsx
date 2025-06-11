'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { socialLinksData, contactEmail } from '@/lib/data';
import { Linkedin, Github, Mail, Send, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast";

const iconMap = {
  Linkedin: Linkedin,
  Github: Github,
  Mail: Mail,
};

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form data submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Let's Connect</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 sm:p-8 rounded-lg shadow-xl">
            <div>
              <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
              <Input 
                id="name" 
                name="name" 
                type="text" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="you@example.com" 
                value={formData.email}
                onChange={handleChange}
                required 
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-sm font-medium">Message</Label>
              <Textarea 
                id="message" 
                name="message" 
                placeholder="Your message..." 
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required 
                className="mt-1"
              />
            </div>
            <Button type="submit" size="lg" className="w-full shadow-md" disabled={isSubmitting}>
              {isSubmitting ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Send className="mr-2 h-4 w-4" />
              )}
              Send Message
            </Button>
          </form>

          <div className="space-y-8 pt-8 md:pt-0">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Direct Contact</h3>
              <a href={`mailto:${contactEmail}`} className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group">
                <Mail className="h-6 w-6 text-foreground/70 group-hover:text-accent transition-colors" />
                <span>{contactEmail}</span>
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Find me on Social Media</h3>
              <div className="flex space-x-6">
                {socialLinksData.map((social) => {
                  const IconComponent = iconMap[social.iconName];
                  return (
                    <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}
                      className="text-muted-foreground hover:text-accent transition-colors">
                      {IconComponent && <IconComponent className="h-8 w-8" />}
                    </Link>
                  );
                })}
              </div>
            </div>
             <div className="mt-8 p-6 border border-dashed border-border rounded-lg bg-card/50">
                <h4 className="font-semibold text-foreground mb-2">Prefer a Quick Chat?</h4>
                <p className="text-sm text-muted-foreground">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
