import { motion } from 'framer-motion';
import { Book, Quote, Laugh } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TragicMulattoSection = () => {
  const letters = [
    {
      from: "Halfway Home in Houston",
      question: "Every time I fill out a form that asks for 'race,' I just check 'other' and write in 'depends on the playlist.' Am I wrong?",
      response: "You're not wrong. You're just pre-seasoned."
    },
    {
      from: "Confused in Culver City",
      question: "Someone told me I look 'racially ambiguous.' Should I be flattered or call HR?",
      response: "Depends — did they say it like a compliment or like they were decoding a WiFi password?"
    }
  ];

  const fakeAds = [
    {
      title: "Light-Skinned Problems Hotline",
      content: "Feeling misunderstood by both sides of the family? Call 1-800-BEIGE-CRISIS for immediate semi-clarity. Our trained operators (all named Devin) will listen patiently while you decide whether to straighten your hair or your story."
    },
    {
      title: "Half Off Everything Except Identity",
      content: "From the creators of Conflicted Apparel™ comes our new fall collection — Blurred Lines Vol. 1. Clothes designed for people who never quite fit in the picture. (Now available in shades of Maybe, Kinda, and Depends on the Lighting.)"
    },
    {
      title: "DNA Results Sponsored by Maury",
      content: "You are the father. But you're also your mother's complexion. And your aunt's rhythm. And your uncle's confusion. Celebrate the chaos."
    }
  ];

  return (
    <section id="tragic-mulatto" className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,165,116,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4a574]/10 border border-[#d4a574]/30 rounded-full mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Book className="w-4 h-4 text-[#d4a574]" />
            <span className="text-sm font-medium text-[#d4a574]">GiFTD & PrVLGD Presents</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-light mb-4 text-[#d4a574]" style={{ fontFamily: 'Didot, serif', letterSpacing: '0.05em' }}>
            A TRAGIC MULATTO
          </h2>
          <p className="text-xl italic text-white/80 mb-8">
            A Satirical Journal of Identity, Absurdity, and Beige Confusion
          </p>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            By Yours Truly, #4429
          </p>
        </motion.div>

        {/* Book Cover Image */}
        <motion.div
          className="max-w-md mx-auto mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-[3/4] rounded-2xl overflow-hidden border-4 border-[#d4a574] shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-sm text-[#d4a574] mb-4">GiFTD & PrVLGD</div>
                <h3 className="text-4xl text-[#d4a574] mb-8" style={{ fontFamily: 'Didot, serif' }}>
                  A TRAGIC<br />MULATTO
                </h3>
                <p className="text-sm text-[#d4a574]/80 leading-relaxed">
                  A COLLECTION OF HEART BREAKING JOURNAL ENTRIES THAT GIVE INSIGHT OF FROM A YOUNG MULATTO MAN WHO WASNT LIGHT ENOUGH TO GAIN ACCEPTANCE FROM AND NOT DARK ENOUGH TO BE CONSIDER BLACK. A MAN WITH NO HOME. A TRAGIC MULATTO.
                </p>
                <div className="mt-8 text-xl italic text-[#d4a574]" style={{ fontFamily: 'Didot, serif' }}>
                  by Yours Truly, #4429
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Letters to the Editor */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Quote className="w-6 h-6 text-[#d4a574]" />
            <h3 className="text-3xl font-light text-[#d4a574]" style={{ fontFamily: 'Didot, serif' }}>
              Letters to the Editor
            </h3>
          </div>

          <div className="space-y-8">
            {letters.map((letter, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#d4a574]/30 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-4">
                  <span className="text-sm font-bold text-[#d4a574]">Dear Tragic,</span>
                </div>
                <p className="text-white/80 italic mb-4 leading-relaxed">
                  {letter.question}
                </p>
                <div className="text-sm text-white/60 mb-4">
                  — {letter.from}
                </div>
                <div className="border-t border-white/10 pt-4">
                  <span className="text-sm font-bold text-[#d4a574]">Dear {letter.from.split(' in ')[0]},</span>
                  <p className="text-white mt-2">{letter.response}</p>
                  <div className="text-sm text-[#d4a574] mt-2">— T.M.</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* The Beige Manifesto */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-4xl font-light text-center text-[#d4a574] mb-8" style={{ fontFamily: 'Didot, serif' }}>
            The Beige Manifesto
          </h3>
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#d4a574]/10 to-[#8b7355]/10 border-l-4 border-[#d4a574] rounded-r-2xl p-12">
            <p className="text-2xl text-white/90 italic leading-relaxed text-center">
              We, the culturally conflicted, pledge allegiance to no box checked.
              We will not dim for clarity nor tan for credibility.
              We exist in grayscale — and we look damn good doing it.
            </p>
          </div>
        </motion.div>

        {/* Fake Ads */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Laugh className="w-6 h-6 text-[#d4a574]" />
            <h3 className="text-3xl font-light text-[#d4a574]" style={{ fontFamily: 'Didot, serif' }}>
              Fake Ads
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {fakeAds.map((ad, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#d4a574]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="text-lg font-bold text-[#d4a574] mb-4">
                  {ad.title}
                </h4>
                <p className="text-sm text-white/70 leading-relaxed">
                  {ad.content}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing Note */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="inline-block p-8 bg-white/5 backdrop-blur-sm border border-[#d4a574]/30 rounded-2xl mb-8">
            <p className="text-xl text-white/80 italic">
              If you've read this far, congratulations.<br />
              You, too, are now lost.<br />
              <span className="text-[#d4a574] font-bold">Welcome to the club.</span>
            </p>
          </div>

          <Button
            size="lg"
            className="bg-gradient-to-r from-[#8b7355] to-[#6b5345] hover:from-[#d4a574] hover:to-[#b48a5a] text-white px-12 py-6 text-lg border-2 border-[#d4a574]"
            style={{ fontFamily: 'Didot, serif', letterSpacing: '0.1em' }}
          >
            READ MORE
          </Button>

          <p className="text-sm text-white/60 mt-6">
            A GiFTD N' PrVLGD Publication
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TragicMulattoSection;
