import { useState, useEffect } from 'react';
import { Eye, EyeOff, X, Maximize2, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';

interface PreviewPanelProps {
  isOpen: boolean;
  onClose: () => void;
  previewData?: {
    founderProfile?: any;
    features?: any[];
    galleryItems?: any[];
    aboutItems?: any[];
    companyInfo?: any[];
  };
}

export function PreviewPanel({ isOpen, onClose, previewData }: PreviewPanelProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeSection, setActiveSection] = useState<'founder' | 'features' | 'gallery' | 'about'>('founder');

  if (!isOpen) return null;

  const { founderProfile, features, galleryItems, aboutItems, companyInfo } = previewData || {};

  const getCompanyInfoBySection = (section: string) => {
    return companyInfo?.find(info => info.section === section);
  };

  return (
    <div className={cn(
      "fixed bg-background border-l border-border shadow-2xl z-50 flex flex-col transition-all duration-300",
      isFullscreen 
        ? "inset-0" 
        : "right-0 top-0 bottom-0 w-[600px]"
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-muted/50">
        <div className="flex items-center gap-2">
          <Eye className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Live Preview</h3>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsFullscreen(!isFullscreen)}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Section Tabs */}
      <div className="flex border-b border-border bg-muted/30">
        {['founder', 'features', 'gallery', 'about'].map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section as any)}
            className={cn(
              "px-4 py-2 text-sm font-medium transition-colors capitalize",
              activeSection === section
                ? "bg-background text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Preview Content */}
      <div className="flex-1 overflow-auto bg-black text-white">
        {activeSection === 'founder' && (
          <div className="p-8">
            <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-4">Founder Profile Preview</h4>
            {founderProfile ? (
              <div className="space-y-6">
                <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                  {founderProfile.video_url?.includes('.mp4') ? (
                    <video
                      src={founderProfile.video_url}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      autoPlay
                    />
                  ) : founderProfile.video_url ? (
                    <img
                      src={founderProfile.video_url}
                      alt={founderProfile.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-600">
                      No media
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">{founderProfile.name || 'Name'}</h2>
                  <p className="text-gray-400">{founderProfile.title || 'Title'}</p>
                  <blockquote className="border-l-2 border-primary pl-4 italic text-gray-300 mt-4">
                    "{founderProfile.quote || 'Quote'}"
                  </blockquote>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                No founder profile data
              </div>
            )}
          </div>
        )}

        {activeSection === 'features' && (
          <div className="p-8">
            <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-4">Features Preview</h4>
            {features && features.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={feature.id || index}
                    className="p-4 bg-gray-900 rounded-lg border border-gray-800"
                  >
                    <div className="text-primary text-2xl mb-2">
                      {feature.icon === 'Music' && '🎵'}
                      {feature.icon === 'Mic' && '🎤'}
                      {feature.icon === 'Brain' && '🧠'}
                      {feature.icon === 'Users' && '👥'}
                      {feature.icon === 'Zap' && '⚡'}
                      {feature.icon === 'Star' && '⭐'}
                    </div>
                    <h3 className="font-semibold">{feature.title}</h3>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                No features data
              </div>
            )}
          </div>
        )}

        {activeSection === 'gallery' && (
          <div className="p-8">
            <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-4">Gallery Preview</h4>
            {galleryItems && galleryItems.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {galleryItems.map((item, index) => (
                  <div
                    key={item.id || index}
                    className="aspect-square bg-gray-900 rounded-lg overflow-hidden relative group"
                  >
                    {item.media_type === 'video' ? (
                      <video
                        src={item.media_url}
                        className="w-full h-full object-cover"
                        muted
                        loop
                      />
                    ) : (
                      <img
                        src={item.media_url}
                        alt={item.title || 'Gallery item'}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <div>
                        <h3 className="font-semibold">{item.title || 'Untitled'}</h3>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                No gallery items
              </div>
            )}
          </div>
        )}

        {activeSection === 'about' && (
          <div className="p-8">
            <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-4">About Section Preview</h4>
            {aboutItems && aboutItems.length > 0 ? (
              <div className="space-y-4">
                {aboutItems.map((item, index) => (
                  <div
                    key={item.id || index}
                    className="p-4 bg-gray-900 rounded-lg border border-gray-800"
                  >
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.content}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                No about items
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-border bg-muted/30 text-center">
        <p className="text-xs text-muted-foreground">
          Preview updates automatically as you edit
        </p>
      </div>
    </div>
  );
}
