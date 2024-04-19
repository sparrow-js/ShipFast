import prisma from "@/lib/prisma";

// READ
export async function getUserById(userId: string) {
    try {
  
      const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
      });
  
      if (!user) return null;
  
      return user;
    } catch (error) {
      return null;
    }
}