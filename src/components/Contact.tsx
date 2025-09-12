import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/LanguageContext";
import { supabase, ContactMessage } from "@/lib/supabase";

export const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmailNotification = async (messageData: ContactMessage) => {
    try {
      // Using Web3Forms (free, no signup required)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'f833101a-65a1-4a07-8787-9dd86ca2d9a4',
          name: messageData.name,
          email: messageData.email,
          subject: `New Contact Form Message from ${messageData.name}`,
          message: `Name: ${messageData.name}\nEmail: ${messageData.email}\nMessage: ${messageData.message}`,
          from_name: 'Portfolio Contact Form',
          replyto: messageData.email,
        }),
      });

      if (response.ok) {
        console.log('Email notification sent successfully');
      } else {
        console.error('Email notification failed');
      }
    } catch (error) {
      console.error('Email notification error:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare message data
      const messageData: ContactMessage = {
        name: formData.name,
        email: formData.email,
        subject: "Contact Form Submission",
        message: formData.message,
        status: "new"
      };

      console.log("Sending message to Supabase:", messageData);

      // Insert message into Supabase
      const { data, error } = await supabase
        .from("contact_messages")
        .insert([messageData])
        .select();

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      console.log("Message sent successfully to Supabase:", data);

      // Send email notification
      await sendEmailNotification(messageData);

      toast({
        title: t.contact.form.send,
        description: t.contact.success,
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: `Failed to send message: ${error.message || "Please try again or contact me directly."}`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-6 lg:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-12">
          {t.contact.title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-muted-foreground font-inter leading-relaxed">
              {t.contact.intro}
            </p>
            
            <div className="space-y-4">
              <Card className="p-4 flex items-center gap-4 hover:border-accent transition-colors">
                <Mail className="text-accent" size={24} />
                <div>
                  <p className="font-semibold text-foreground">{t.contact.info.email}</p>
                  <a href="mailto:alieddardoury@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                    alieddardoury@gmail.com
                  </a>
                </div>
              </Card>
              
              <Card className="p-4 flex items-center gap-4 hover:border-accent transition-colors">
                <Phone className="text-accent" size={24} />
                <div>
                  <p className="font-semibold text-foreground">{t.contact.info.phone}</p>
                  <p className="text-muted-foreground">Available on request</p>
                </div>
              </Card>
              
              <Card className="p-4 flex items-center gap-4 hover:border-accent transition-colors">
                <MapPin className="text-accent" size={24} />
                <div>
                  <p className="font-semibold text-foreground">{t.contact.info.location}</p>
                  <p className="text-muted-foreground">Kenitra, Morocco / Remote</p>
                </div>
              </Card>
            </div>
          </div>
          
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.form.name}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="John Doe"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.form.email}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder="john@example.com"
                  disabled={isSubmitting}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.form.message}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full"
                  placeholder="Tell me about your project..."
                  disabled={isSubmitting}
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-accent text-white hover:bg-accent/90 transition-all duration-300 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  t.contact.form.send
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
