import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";




// HERE WE PROVIDED THE PROTECTED ROUTES THAT WE WANT TO PROTECT
// MATLAB IS CASE MEIN HUMARE PAS 3 ROUTES YA PAGES HAIN (1- DASHBOARD 2- ACCOUNT 3- TRANSACTION) TW MEIN CHAHON GA K AGAR USER IN ROUTES PAR BINA SIGN IN KIYE HUWE JANE KI KOSHISH KARE TO USKO SIGN IN PAGE PAR REDIRECT KARDYA JAYE  
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transaction(.*)",
])
export default clerk = clerkMiddleware(async (auth, req) => {
    const { userId } = await auth();
  
    if (!userId && isProtectedRoute(req)) {
      const { redirectToSignIn } = await auth();
      return redirectToSignIn();
    }
  });




// AUR YEH WO SECTION HAI JAB HUMNE CLERK TO IMPORT KIYA THA TW USKI DOCUMENTATION KI MADAD SE HUMNE YEH CODE LIKHA HAI AUR YEH CODE LANAY K LIYE HAMEHSA AIK MIDDLEWARE.JS FILE BANANI PARTI HAI
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};