import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Smartphone, CheckCircle, Share, Plus, MoreVertical } from "lucide-react";
import { motion } from "framer-motion";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const Install = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    // Detect platform
    const userAgent = navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(userAgent));
    setIsAndroid(/android/.test(userAgent));

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Listen for app installed event
    window.addEventListener("appinstalled", () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  const benefits = [
    "Access your study groups offline",
    "Faster loading times",
    "Push notifications for messages",
    "Works like a native app",
    "No app store download needed",
  ];

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6">
            <Smartphone className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Install Study Group Finder</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Add our app to your home screen for the best experience. It's fast, works offline, and feels just like a native app.
          </p>
        </motion.div>

        {isInstalled ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <Card className="max-w-md mx-auto bg-primary/5 border-primary/20">
              <CardContent className="pt-8 pb-6">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-semibold mb-2">Already Installed!</h2>
                <p className="text-muted-foreground">
                  You're already using Study Group Finder as an installed app. Enjoy the full experience!
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefits Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Why Install?</CardTitle>
                  <CardDescription>
                    Get the most out of Study Group Finder
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Installation Instructions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>How to Install</CardTitle>
                  <CardDescription>
                    {isIOS
                      ? "Follow these steps on your iPhone or iPad"
                      : isAndroid
                      ? "Follow these steps on your Android device"
                      : "Install directly from your browser"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {deferredPrompt ? (
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Click the button below to install the app directly:
                      </p>
                      <Button
                        size="lg"
                        className="w-full gap-2"
                        onClick={handleInstallClick}
                      >
                        <Download className="w-5 h-5" />
                        Install App
                      </Button>
                    </div>
                  ) : isIOS ? (
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold flex-shrink-0">
                          1
                        </div>
                        <div>
                          <p className="font-medium">Tap the Share button</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            Look for the <Share className="w-4 h-4" /> icon at the bottom of Safari
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold flex-shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Scroll down and tap "Add to Home Screen"</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            Look for the <Plus className="w-4 h-4" /> icon
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold flex-shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Tap "Add" to confirm</p>
                          <p className="text-sm text-muted-foreground">
                            The app will appear on your home screen
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : isAndroid ? (
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold flex-shrink-0">
                          1
                        </div>
                        <div>
                          <p className="font-medium">Tap the menu button</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            Look for <MoreVertical className="w-4 h-4" /> in Chrome's top-right corner
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold flex-shrink-0">
                          2
                        </div>
                        <div>
                          <p className="font-medium">Select "Install app" or "Add to Home screen"</p>
                          <p className="text-sm text-muted-foreground">
                            The option might vary by browser
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold flex-shrink-0">
                          3
                        </div>
                        <div>
                          <p className="font-medium">Tap "Install" to confirm</p>
                          <p className="text-sm text-muted-foreground">
                            Find the app in your app drawer
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Look for the install icon in your browser's address bar, or use your browser's menu to add this site to your home screen.
                      </p>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm">
                          <strong>Chrome:</strong> Click the install icon in the address bar or go to Menu → Install App
                        </p>
                      </div>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm">
                          <strong>Edge:</strong> Click the Apps icon in the address bar → Install
                        </p>
                      </div>
                      <div className="p-4 bg-muted/50 rounded-lg">
                        <p className="text-sm">
                          <strong>Firefox:</strong> Menu → Install
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Install;
