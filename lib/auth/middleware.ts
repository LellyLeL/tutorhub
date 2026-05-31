import { NextRequest, NextResponse } from 'next/server';

export type UserRole = 'student' | 'tutor' | 'admin';

export interface AuthPayload {
  userId: string;
  email: string;
  role: UserRole;
  iat: number;
  exp: number;
}

/**
 * Verifies user role from the request
 * Extracts and validates JWT token from Authorization header
 */
export async function verifyUserRole(
  request: NextRequest,
  requiredRole?: UserRole
): Promise<{ valid: boolean; payload?: AuthPayload; error?: string }> {
  try {
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader) {
      return {
        valid: false,
        error: 'No authorization header provided',
      };
    }

    const token = authHeader.replace('Bearer ', '');
    
    if (!token) {
      return {
        valid: false,
        error: 'Invalid authorization header format',
      };
    }

    // TODO: Implement JWT verification with your secret key
    // This is a placeholder - implement actual JWT validation
    // Example using jose or jsonwebtoken:
    // const payload = await jwtVerify(token, secret);
    
    // For now, returning error to indicate implementation needed
    return {
      valid: false,
      error: 'JWT verification not yet implemented',
    };
  } catch (error) {
    return {
      valid: false,
      error: `Authentication failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
    };
  }
}

/**
 * Middleware helper to protect API routes
 */
export async function withAuthMiddleware(
  request: NextRequest,
  handler: (req: NextRequest, auth: AuthPayload) => Promise<NextResponse>,
  requiredRole?: UserRole
): Promise<NextResponse> {
  const { valid, payload, error } = await verifyUserRole(request, requiredRole);

  if (!valid || !payload) {
    return NextResponse.json(
      { error: error || 'Unauthorized' },
      { status: 401 }
    );
  }

  if (requiredRole && payload.role !== requiredRole) {
    return NextResponse.json(
      { error: 'Insufficient permissions' },
      { status: 403 }
    );
  }

  return handler(request, payload);
}