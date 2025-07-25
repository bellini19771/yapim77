import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      
      const inquiry = await storage.createContactInquiry(validatedData);
      
      // In a real application, you would send an email notification here
      // using a service like Nodemailer, SendGrid, etc.
      console.log("New contact inquiry received:", inquiry);
      
      res.status(201).json({ 
        message: "Contact inquiry submitted successfully",
        id: inquiry.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        console.error("Error creating contact inquiry:", error);
        res.status(500).json({ 
          message: "Failed to submit contact inquiry" 
        });
      }
    }
  });

  // Get all contact inquiries (for admin purposes)
  app.get("/api/contact-inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json(inquiries);
    } catch (error) {
      console.error("Error fetching contact inquiries:", error);
      res.status(500).json({ 
        message: "Failed to fetch contact inquiries" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
