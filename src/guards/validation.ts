import { Request } from "express";

function validateRequest(request: Request): boolean {
    if (request.body && request.body.username && request.body.password) {
      return true;
    } else {
      return false;
    }
  }

  
  