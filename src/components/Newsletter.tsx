// Newsletter.tsx
// import { useState } from 'react';
// import { Mail } from 'lucide-react';
import BeehiivEmbed from './BeehiivEmbed';

export default function Newsletter() {
  // const [email, setEmail] = useState('');
  // const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setStatus('loading');

  //   try {
  //     const response = await fetch('YOUR_MAILCHIMP_ENDPOINT', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         email_address: email,
  //         status: 'subscribed',
  //       }),
  //     });

  //     if (response.ok) {
  //       setStatus('success');
  //       setEmail('');
  //     } else {
  //       setStatus('error');
  //     }
  //   } catch (error) {
  //     setStatus('error');
  //   }
  // };

  return (
    // <section className="py-12 bg-primary-900">
    //   <div className="container mx-auto px-6">
    //     <div className="max-w-4xl mx-auto">
    //       <div className="flex flex-col md:flex-row items-center justify-between gap-8">
    //         <div className="flex-1">
    //           <h3 className="text-2xl font-bold text-white mb-2">Our Newsletter</h3>
    //           <p className="text-primary-100">
    //             Subscribe to our newsletter to get our latest news and exclusive offers.
    //           </p>
    //         </div>

    //         <form 
    //           action="https://mezanmitech.us3.list-manage.com/subscribe/post?u=23858f353d613b679533d725e&amp;id=4abaa8787f"
    //           method="post"
    //           id="mc-embedded-subscribe-form"
    //           name="mc-embedded-subscribe-form"
    //           className="flex-1 w-full validate"
    //           target="_blank"
    //           onSubmit={handleSubmit}
    //         >
    //           <div className="flex gap-4">
    //             <div className="flex-1 relative">
    //               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    //                 <Mail className="h-5 w-5 text-gray-400" />
    //               </div>
    //               <input
    //                 type="email"
    //                 name="EMAIL"
    //                 id="mce-EMAIL"
    //                 required
    //                 value={email}
    //                 onChange={(e) => setEmail(e.target.value)}
    //                 placeholder="Enter your email"
    //                 className="w-full pl-10 pr-4 py-3 rounded-lg border border-primary-700 bg-primary-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
    //               />
    //             </div>
    //             <button
    //               type="submit"
    //               name="subscribe"
    //               id="mc-embedded-subscribe"
    //               disabled={status === 'loading'}
    //               className="px-6 py-3 bg-white text-primary-900 rounded-lg font-medium hover:bg-primary-50 transition-colors disabled:opacity-50"
    //             >
    //               {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
    //             </button>
    //           </div>

    //           {/* Mailchimp required hidden fields */}
    //           <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
    //             <input type="text" name="b_23858f353d613b679533d725e_4abaa8787f" tabIndex={-1} />
    //           </div>

    //           {status === 'success' && (
    //             <p className="mt-2 text-green-400">Thanks for subscribing!</p>
    //           )}
    //           {status === 'error' && (
    //             <p className="mt-2 text-red-400">Something went wrong. Please try again.</p>
    //           )}
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="py-12 bg-primary-900">
      <div className="container mx-auto px-6">
           <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
               <h3 className="text-2xl font-bold text-white mb-2">Our Newsletter</h3>
               <p className="text-primary-100">
                Subscribe to our newsletter to get our latest news and offers.
               </p>
            </div>
      <BeehiivEmbed embedId='1bbccd9e-06b8-4241-b3f3-a7df48c76128' />
      </div>
      </div>
      </div>
    </section>
  );
}