const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TikTok Downloader Pro | Black Herix</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://unpkg.com/scrollreveal"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        :root { --tt-pink: #fe2c55; --tt-cyan: #25f4ee; }
        body { background: #000; color: #fff; font-family: 'Poppins', sans-serif; overflow-x: hidden; }
        .glass-3d { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 30px; }
        .tt-btn { background: linear-gradient(45deg, #fe2c55, #ff1e56); transition: 0.4s; cursor: pointer; }
        .tt-btn:hover { transform: translateY(-3px); box-shadow: 0 10px 25px rgba(254, 44, 85, 0.5); }
        .hacking-card { background: linear-gradient(135deg, #200, #000); border: 1px solid #f00; box-shadow: 0 0 30px rgba(255, 0, 0, 0.2); max-width: 350px; margin: 0 auto; border-radius: 40px; }
        .profile-img-circle { border: 3px solid #f00; border-radius: 50%; width: 110px; height: 110px; object-fit: cover; margin: 0 auto; display: block; }
        .copy-toast { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); background: #fe2c55; color: white; padding: 10px 20px; border-radius: 10px; display: none; z-index: 1000; font-size: 12px; font-weight: bold; border: 1px solid white; }
    </style>
</head>
<body>

    <div class="copy-toast" id="toast">Hashtags Copied!</div>

    <nav class="p-6 border-b border-white/5 bg-black/80 backdrop-blur-3xl sticky top-0 z-50 flex justify-center">
        <div class="flex items-center gap-3">
            <i class="fab fa-tiktok text-3xl text-[#fe2c55]"></i>
            <span class="font-black text-2xl tracking-tighter uppercase italic">TikTok <span class="text-[#fe2c55]">Pro</span></span>
        </div>
    </nav>

    <div class="max-w-md mx-auto px-5 py-8">
        <div class="text-center mb-12">
            <h1 class="text-3xl font-black mb-2 uppercase">Fast Downloader</h1>
            <p class="text-[10px] text-gray-500 tracking-[0.4em] mb-10 font-bold uppercase italic">By Black Herix</p>
            <div class="space-y-4">
                <input type="text" id="videoUrl" placeholder="Paste Video Link Here..." class="w-full bg-white/5 p-5 rounded-2xl outline-none border border-white/10 focus:border-pink-500 text-sm glass-3d">
                <button id="downloadBtn" class="w-full tt-btn py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl text-white">DOWNLOAD NOW</button>
            </div>
        </div>

        <div id="loading" class="hidden text-center py-10">
            <i class="fab fa-tiktok text-5xl text-pink-600 animate-bounce"></i>
            <p class="mt-4 text-[10px] font-black text-cyan-400 animate-pulse uppercase">Fetching HD Quality...</p>
        </div>
        <div id="result"></div>

        <section class="mt-16 space-y-4">
            <h2 class="text-xs font-black text-pink-500 uppercase tracking-widest text-center italic">How to Use</h2>
            <div class="space-y-3">
                <div class="glass-3d p-4 flex items-center gap-4 border-l-4 border-pink-500">
                    <div class="bg-[#fe2c55] min-w-[25px] h-[25px] flex items-center justify-center rounded-full text-[10px] font-black">1</div>
                    <p class="text-[11px]">Copy video link from TikTok.</p>
                </div>
                <div class="glass-3d p-4 flex items-center gap-4 border-l-4 border-pink-500">
                    <div class="bg-[#fe2c55] min-w-[25px] h-[25px] flex items-center justify-center rounded-full text-[10px] font-black">2</div>
                    <p class="text-[11px]">Paste link in the box above.</p>
                </div>
                <div class="glass-3d p-4 flex items-center gap-4 border-l-4 border-pink-500">
                    <div class="bg-[#fe2c55] min-w-[25px] h-[25px] flex items-center justify-center rounded-full text-[10px] font-black">3</div>
                    <p class="text-[11px]">Click download to save video.</p>
                </div>
            </div>
        </section>

        <section class="mt-20 space-y-6">
            <h2 class="text-xs font-black text-cyan-400 uppercase tracking-widest text-center italic">About Our Company</h2>
            <div class="glass-3d p-6 border-l-4 border-pink-500">
                <h4 class="font-bold text-sm text-white uppercase italic mb-2">Mirzapur Cyber Venom</h4>
                <p class="text-[10px] text-gray-400 leading-relaxed italic">Leading digital security and development agency specialized in advanced web architecture.</p>
            </div>
            <div class="grid gap-3">
                <div class="glass-3d p-4 border-b border-white/5 flex items-center gap-4">
                    <i class="fas fa-shield-halved text-pink-500"></i>
                    <div><h5 class="text-[11px] font-black uppercase">Cyber Security</h5><p class="text-[9px] text-gray-500">Professional security audits and protection.</p></div>
                </div>
                <div class="glass-3d p-4 border-b border-white/5 flex items-center gap-4">
                    <i class="fas fa-layer-group text-cyan-400"></i>
                    <div><h5 class="text-[11px] font-black uppercase">Web Development</h5><p class="text-[9px] text-gray-500">Modern, fast and scalable web solutions.</p></div>
                </div>
                <div class="glass-3d p-4 border-b border-white/5 flex items-center gap-4">
                    <i class="fas fa-robot text-red-500"></i>
                    <div><h5 class="text-[11px] font-black uppercase">System Automation</h5><p class="text-[9px] text-gray-500">Custom API and automated bot development.</p></div>
                </div>
            </div>
        </section>

        <section class="mt-24 mb-10 text-center">
            <h2 class="text-[10px] font-black text-red-600 uppercase tracking-[0.4em] mb-6 italic">Developer Info</h2>
            <div class="hacking-card p-8">
                <img src="https://i.ibb.co/1tY8ch4g/1000018975.png" alt="Black Herix" class="profile-img-circle mb-4 shadow-xl">
                <h4 class="text-2xl font-black italic tracking-tighter text-white uppercase">Black Herix</h4>
                <p class="text-[9px] text-red-500 font-bold tracking-[0.2em] uppercase mb-6">Founder of Mirzapur Cyber Venom</p>
                <div class="space-y-2 mb-8 text-left">
                    <div class="bg-black/40 p-3 rounded-xl border border-red-900/20 flex items-center gap-3">
                        <i class="fas fa-code text-red-600 text-xs"></i>
                        <p class="text-[10px] font-bold text-gray-300 uppercase">Website Developing</p>
                    </div>
                    <div class="bg-black/40 p-3 rounded-xl border border-red-900/20 flex items-center gap-3">
                        <i class="fas fa-mobile-alt text-red-600 text-xs"></i>
                        <p class="text-[10px] font-bold text-gray-300 uppercase">App Developing</p>
                    </div>
                    <div class="bg-black/40 p-3 rounded-xl border border-red-900/20 flex items-center gap-3">
                        <i class="fas fa-user-shield text-red-600 text-xs"></i>
                        <p class="text-[10px] font-bold text-gray-300 uppercase">Cyber Security Expert</p>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-2">
                    <a href="https://t.me/Black_Herix" class="bg-red-600 text-white text-[9px] font-black py-3 rounded-xl uppercase">Contact Developer</a>
                    <a href="https://t.me/+VsN_05q2cUJmNDA9" class="bg-white text-black text-[9px] font-black py-3 rounded-xl uppercase">Developer Channel</a>
                </div>
            </div>
        </section>
    </div>

    <footer class="text-center py-10 bg-black border-t border-white/5 text-[9px] text-gray-700 uppercase tracking-[1em]">
        MCV SECURITY PRO
    </footer>

    <script>
        $(document).ready(function() {
            $('#downloadBtn').click(function() {
                var url = $('#videoUrl').val();
                if(!url) return alert("Paste Link!");
                $('#result').hide();
                $('#loading').removeClass('hidden').fadeIn();

                $.ajax({
                    url: 'https://www.tikwm.com/api/?url=' + encodeURIComponent(url),
                    type: 'GET',
                    success: function(res) {
                        $('#loading').hide();
                        if(res.code == 0) {
                            var v = res.data;
                            var titleWords = v.title.replace(/[^\\w\\s]/gi, '').split(' ').filter(w => w.length > 3);
                            var dynamicTags = titleWords.map(w => "#" + w).slice(0, 5).join(' ');
                            var brandingTags = "#BlackHerix #MirzapurCyberVenom #TikTokPro #Viral";
                            var finalHashtags = (dynamicTags + " " + brandingTags).trim();

                            var html = \`
                                <div class="glass-3d p-6 mt-10 mb-10 border-pink-500/20 shadow-2xl">
                                    <video controls playsinline class="w-full mb-6 rounded-2xl" poster="\${v.cover}"><source src="\${v.play}" type="video/mp4"></video>
                                    <div class="flex items-center gap-4 mb-6 p-3 bg-white/5 rounded-2xl border border-white/5">
                                        <img src="\${v.author.avatar}" class="w-12 h-12 rounded-full border border-pink-500">
                                        <div>
                                            <p class="text-sm font-black text-white">\${v.author.nickname}</p>
                                            <p class="text-[10px] text-pink-500 font-bold">@\${v.author.unique_id}</p>
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-4 gap-2 mb-6 text-center text-[9px] font-black">
                                        <div class="bg-white/5 p-2 rounded-xl border border-white/5"><i class="fas fa-play text-cyan-400 block mb-1"></i>\${v.play_count}</div>
                                        <div class="bg-white/5 p-2 rounded-xl border border-white/5"><i class="fas fa-heart text-pink-500 block mb-1"></i>\${v.digg_count}</div>
                                        <div class="bg-white/5 p-2 rounded-xl border border-white/5"><i class="fas fa-comment text-blue-400 block mb-1"></i>\${v.comment_count}</div>
                                        <div class="bg-white/5 p-2 rounded-xl border border-white/5"><i class="fas fa-share text-green-400 block mb-1"></i>\${v.share_count}</div>
                                    </div>
                                    <div class="bg-black/40 p-4 rounded-xl border border-white/5 mb-6">
                                        <p class="text-[10px] text-cyan-400 font-black mb-2 uppercase italic">Auto Hashtags:</p>
                                        <div class="text-[11px] text-gray-400 italic mb-4">\${finalHashtags}</div>
                                        <button id="copyBtn" class="w-full bg-white/5 hover:bg-white/10 border border-white/10 py-3 rounded-lg text-[10px] font-black uppercase transition-all">
                                            <i class="fas fa-copy mr-2 text-pink-500"></i> Copy All Hashtags
                                        </button>
                                    </div>
                                    <a href="\${v.play}" target="_blank" class="w-full tt-btn text-center py-4 rounded-2xl text-xs font-black block uppercase mb-3 italic">Download Video HD</a>
                                    <a href="\${v.music}" target="_blank" class="w-full bg-white/10 text-center py-4 rounded-2xl text-xs font-black block border border-white/10 uppercase italic">Download MP3</a>
                                </div>
                            \`;
                            $('#result').html(html).fadeIn();

                            $(document).off('click', '#copyBtn').on('click', '#copyBtn', function() {
                                var $temp = $("<textarea>");
                                $("body").append($temp);
                                $temp.val(finalHashtags).select();
                                document.execCommand("copy");
                                $temp.remove();
                                $('#toast').fadeIn().delay(2000).fadeOut();
                            });
                        }
                    }
                });
            });
        });
    </script>
</body>
</html>
    `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
