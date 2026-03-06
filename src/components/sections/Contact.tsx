// src/components/sections/Contact.tsx
'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/ui/ContactForm';
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
  Clock,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/FaizanNaroo",
      label: "GitHub",
      username: "@FaizanNaroo",
      color: "hover:text-gray-300"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/faizannaroo/",
      label: "LinkedIn",
      username: "in/faizannaroo",
      color: "hover:text-blue-400"
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "faizan.naroo@gmail.com",
      href: "mailto:faizan.naroo@gmail.com",
      primary: true
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 3008741784",
      href: "tel:+923008741784"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lahore, Pakistan"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24-48 hours"
    }
  ];

  return (
    <section id="contact" className="relative py-20 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Let's Build Something Together
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Whether it's AI, full-stack development, or just a creative idea.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Terminal-style intro */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/30 mb-2 font-mono text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              <span>$ ./connect.sh --opportunities</span>
            </div>

            <h3 className="text-2xl font-semibold text-foreground">
              Get in <span className="text-primary">Touch</span>
            </h3>

            <p className="text-muted-foreground">
              I'm currently available for freelance work, part-time opportunities,
              and research collaborations. If you have a project that needs expertise
              in AI, ML,Natural Language Processing, or Full-Stack Development, let's talk.
            </p>

            {/* Contact Information Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0 group-hover:opacity-20 blur transition duration-300" />
                  <div className="relative bg-muted/20 p-4 rounded-lg border border-primary/10 group-hover:border-primary/30 transition-all">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <info.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm text-foreground hover:text-primary transition-colors flex items-center gap-1"
                          >
                            {info.value}
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        ) : (
                          <p className="text-sm text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-sm font-medium text-muted-foreground mb-4">
                Connect with me on social media
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="group relative"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0 group-hover:opacity-20 blur transition duration-300" />
                    <div className="relative bg-muted/20 p-3 rounded-lg border border-primary/10 group-hover:border-primary/30 transition-all flex items-center gap-2">
                      <social.icon className={`w-4 h-4 transition-colors ${social.color}`} />
                      <span className="text-sm text-foreground hidden sm:inline">{social.label}</span>
                      <span className="text-xs text-muted-foreground hidden lg:inline">
                        {social.username}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>


            {/* Mini Profile Card - Commented Out
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20 mb-6"
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                <img
                  src="/images/profile-thumbnail.jpg"
                  alt="Your Name"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground">Your Name</h4>
                <p className="text-sm text-muted-foreground">Full-Stack Developer & AI Engineer</p>
                <p className="text-xs text-primary mt-1">FAST NUCES '25</p>
              </div>
            </motion.div>
            */}









            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 p-4 bg-secondary/10 border border-secondary/30 rounded-lg"
            >
              <div className="relative">
                <div className="w-3 h-3 bg-secondary rounded-full" />
                <div className="absolute inset-0 w-3 h-3 bg-secondary rounded-full animate-ping opacity-75" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Available for opportunities</p>
                <p className="text-xs text-muted-foreground">Quick response within 24-48 hours</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Form Container */}
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-500" />

              <div className="relative bg-muted/30 backdrop-blur-sm rounded-xl border border-primary/20 p-8">
                <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Send a Message
                </h4>

                <ContactForm />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full filter blur-3xl opacity-30" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full filter blur-3xl opacity-30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;