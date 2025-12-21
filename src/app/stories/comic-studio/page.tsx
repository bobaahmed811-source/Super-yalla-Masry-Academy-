<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>استوديو القصص المصورة للأطفال</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body { 
            font-family: 'Inter', sans-serif; 
            background-color: #e0f2f1; /* خلفية سماوية فاتحة مناسبة للأطفال */
        }
        :root {
            --primary-color: #00796b; /* لون فيروزي (مياه النيل) */
            --secondary-color: #ffb300; /* لون ذهبي مشرق */
        }
        .comic-bg {
            background-color: var(--primary-color);
        }
        .btn-primary {
            background-color: var(--secondary-color);
            color: #333;
            font-weight: bold;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
            transition: all 0.2s;
        }
        .btn-primary:hover {
            background-color: #ffc107;
            transform: translateY(-2px);
            box-shadow: 0 6px 8px -1px rgba(0, 0, 0, 0.3);
        }
        .comic-panel {
            background-color: white;
            border: 4px solid #333;
            box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.6);
            border-radius: 12px;
            padding: 16px;
            position: relative;
        }
        .speech-bubble {
            background-color: #fff;
            border: 2px solid #333;
            border-radius: 15px;
            padding: 10px 15px;
            position: absolute;
            font-weight: 600;
            text-align: center;
            line-height: 1.4;
            /* تصميم فقاعة الكلام الكلاسيكي */
        }
    </style>
    <!-- تضمين أيقونات Font Awesome -->
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</head>
<body class="antialiased">

    <!-- شريط التنقل (Header) -->
    <header class="comic-bg shadow-xl">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 class="text-3xl font-extrabold text-white tracking-tight">استوديو القصص المصورة</h1>
            <a href="Student_Dashboard.html" class="text-sm font-semibold text-white hover:text-gray-200 transition">
                <i class="fas fa-arrow-left ml-1"></i> العودة للوحة التحكم
            </a>
        </div>
    </header>

    <!-- محتوى الصفحة -->
    <main class="py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <h2 class="text-4xl font-bold text-gray-800 mb-2">اصنع قصتك وكن نجم الدبلجة!</h2>
            <p class="text-lg text-gray-600 mb-10">اختر مشهداً، ثم اطلب من الذكاء الاصطناعي توليد حوار بالعامية، وسجل صوتك لتؤدي الدور!</p>

            <!-- منطقة التحكم -->
            <section class="bg-white p-6 rounded-xl shadow-lg mb-10 border-t-4 border-secondary-color">
                <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    
                    <!-- اختيار المشهد -->
                    <div class="flex items-center space-x-3 space-x-reverse w-full md:w-1/3">
                        <label for="scene-select" class="font-semibold text-gray-700 whitespace-nowrap">اختر مشهد:</label>
                        <select id="scene-select" class="flex-grow p-2 border border-gray-300 rounded-lg">
                            <option value="market">1. السوق الشعبي (خضراوات)</option>
                            <option value="school">2. فناء المدرسة</option>
                            <option value="family" selected>3. العشاء العائلي (افتراضي)</option>
                        </select>
                    </div>

                    <!-- توليد الحوار -->
                    <button id="generate-dialog-button" class="btn-primary px-6 py-3 rounded-full font-semibold flex items-center disabled:opacity-50">
                        <i class="fas fa-wand-magic-sparkles ml-2"></i> توليد حوار العامية (Gemini)
                    </button>

                    <!-- حالة النظام -->
                    <div id="status-message" class="text-gray-500 font-medium">
                        <i class="fas fa-check-circle text-green-500 ml-1"></i> جاهز للعمل.
                    </div>
                </div>
            </section>

            <!-- منطقة القصة المصورة (3 بانلات) -->
            <section id="comic-storyboard" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                <!-- البانل الأول -->
                <div class="comic-panel h-80 relative">
                    <h3 class="font-bold text-gray-800 mb-1">بانل 1: الشخصية الرئيسية</h3>
                    <img id="image-1" src="https://placehold.co/200x200/F0F8FF/333?text=Child+A" alt="Child A" class="w-1/2 h-auto mx-auto my-4 rounded-lg border-2 border-dashed border-gray-400">
                    <!-- فقاعة الكلام -->
                    <div id="bubble-1" class="speech-bubble absolute top-4 right-4 max-w-[60%]">
                        <p id="dialog-1" class="text-sm italic text-gray-700">اضغط "توليد حوار" للبدء.</p>
                    </div>
                </div>

                <!-- البانل الثاني -->
                <div class="comic-panel h-80 relative">
                    <h3 class="font-bold text-gray-800 mb-1">بانل 2: رد فعل</h3>
                    <img id="image-2" src="https://placehold.co/200x200/FFFACD/333?text=Child+B" alt="Child B" class="w-1/2 h-auto mx-auto my-4 rounded-lg border-2 border-dashed border-gray-400">
                    <!-- فقاعة الكلام -->
                    <div id="bubble-2" class="speech-bubble absolute top-4 left-4 max-w-[60%]">
                        <p id="dialog-2" class="text-sm italic text-gray-700">هنا سيظهر الرد.</p>
                    </div>
                </div>

                <!-- البانل الثالث -->
                <div class="comic-panel h-80 relative">
                    <h3 class="font-bold text-gray-800 mb-1">بانل 3: الخلاصة</h3>
                    <img id="image-3" src="https://placehold.co/200x200/F0FFF0/333?text=Result" alt="Result" class="w-1/2 h-auto mx-auto my-4 rounded-lg border-2 border-dashed border-gray-400">
                    <!-- فقاعة الكلام -->
                    <div id="bubble-3" class="speech-bubble absolute bottom-4 right-4 max-w-[70%]">
                        <p id="dialog-3" class="text-sm italic text-gray-700">الحوار الثالث.</p>
                    </div>
                </div>

            </section>
            
            <!-- منطقة التسجيل والتقييم -->
            <section class="mt-8 bg-blue-50 p-6 rounded-xl shadow-inner">
                <h3 class="text-xl font-bold text-gray-700 mb-4">تدريب النطق (أداء الأدوار)</h3>
                <div class="flex items-center justify-between space-x-4 space-x-reverse">
                    <p class="text-sm text-gray-500">سجل صوتك وأنت تقرأ الحوار بالترتيب. سيتم حفظ التسجيل.</p>
                    <div class="flex space-x-4 space-x-reverse">
                        <button id="record-audio-btn" class="bg-red-500 text-white px-5 py-2 rounded-full font-semibold flex items-center disabled:opacity-50">
                            <i class="fas fa-circle ml-2"></i> تسجيل
                        </button>
                        <button id="stop-audio-btn" class="bg-gray-500 text-white px-5 py-2 rounded-full font-semibold flex items-center disabled:opacity-50" disabled>
                            <i class="fas fa-stop ml-2"></i> إيقاف
                        </button>
                        <button id="submit-audio-btn" class="bg-green-600 text-white px-5 py-2 rounded-full font-semibold flex items-center disabled:opacity-50" disabled>
                            <i class="fas fa-save ml-2"></i> حفظ الأداء
                        </button>
                    </div>
                </div>
                <div id="recording-status" class="mt-3 text-sm text-red-600 font-medium hidden">جاري التسجيل...</div>
                <div id="audio-player-area" class="mt-3 hidden">
                    <audio id="audio-playback" controls class="w-full"></audio>
                </div>
            </section>

        </div>
    </main>
    
    <!-- تضمين مكتبات Firebase والتكوين ومنطق الذكاء الاصطناعي -->
    <script type="module">
        // استيراد وظائف Firebase المطلوبة
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
        import { getAuth, signInAnonymously, signInWithCustomToken, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
        import { getFirestore, setLogLevel, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

        setLogLevel('Debug');
        
        // متغيرات Firebase الأساسية
        const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
        const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
        const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;
        
        const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=";
        const API_KEY = ""; // سيتم توفير المفتاح تلقائيًا

        let db;
        let auth;
        let userId = null;
        
        // عناصر DOM
        const sceneSelect = document.getElementById('scene-select');
        const generateDialogButton = document.getElementById('generate-dialog-button');
        const statusMessageElement = document.getElementById('status-message');
        const dialogElements = [
            document.getElementById('dialog-1'),
            document.getElementById('dialog-2'),
            document.getElementById('dialog-3')
        ];
        
        // عناصر التسجيل
        const recordBtn = document.getElementById('record-audio-btn');
        const stopBtn = document.getElementById('stop-audio-btn');
        const submitBtn = document.getElementById('submit-audio-btn');
        const recordingStatusElement = document.getElementById('recording-status');
        const audioPlayerArea = document.getElementById('audio-player-area');
        const audioPlayback = document.getElementById('audio-playback');

        let mediaRecorder;
        let audioChunks = [];
        let finalAudioBlob = null;
        let currentDialogText = null; // النص الذي تم توليده
        
        // ----------------------------------------------------
        //  1. وظائف Firebase والمصادقة
        // ----------------------------------------------------

        async function initializeFirebase() {
            try {
                if (Object.keys(firebaseConfig).length === 0) return;
                const app = initializeApp(firebaseConfig);
                db = getFirestore(app);
                auth = getAuth(app);
                
                if (initialAuthToken) { 
                    await signInWithCustomToken(auth, initialAuthToken); 
                } else if (!auth.currentUser) { 
                    await signInAnonymously(auth); 
                }
                
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        userId = user.uid;
                    }
                });

            } catch (error) {
                console.error("خطأ في تهيئة Firebase:", error);
                updateStatus("خطأ في الاتصال بقاعدة البيانات.", 'error');
            }
        }
        
        // ----------------------------------------------------
        //  2. وظائف الواجهة والتنبيهات
        // ----------------------------------------------------
        
        function updateStatus(message, type = 'info') {
            const colors = {
                info: 'text-gray-500',
                loading: 'text-blue-500 animate-pulse',
                success: 'text-green-500',
                error: 'text-red-500'
            };
            const icon = {
                info: 'fas fa-check-circle',
                loading: 'fas fa-spinner',
                success: 'fas fa-check-circle',
                error: 'fas fa-times-circle'
            };
            statusMessageElement.innerHTML = `<i class="${icon[type]} ml-1"></i> ${message}`;
            statusMessageElement.className = `${colors[type]} font-medium`;
        }

        // ----------------------------------------------------
        //  3. منطق توليد الحوار مع Gemini API
        // ----------------------------------------------------

        async function generateComicDialog() {
            updateStatus("جاري توليد الحوار بالعامية...", 'loading');
            generateDialogButton.disabled = true;
            
            const selectedScene = sceneSelect.value;
            const sceneDescriptions = {
                market: "بين طفل صغير وبائع خضار في السوق، حول سعر الطماطم.",
                school: "بين تلميذين عن الواجبات المدرسية أو اللعب في الفسحة.",
                family: "بين أم وابنها حول طبق الكشري على مائدة العشاء.",
            };
            
            const userQuery = `قم بتوليد حوار مصور مكون من 3 فقاعات كلام (3 جمل قصيرة) مناسب للأطفال في مشهد ${sceneDescriptions[selectedScene]}. يجب أن يكون الحوار بأكمله بالعامية المصرية (ECA) وبسيط وواضح. قم بتنسيق الرد كقائمة مرقمة بثلاث نقاط فقط، كل نقطة تمثل جملة واحدة في فقاعة كلام.`;

            const systemPrompt = "أنت كاتب سيناريوهات قصص مصورة متخصص في العامية المصرية للأطفال. التحدي هو جعل الحوار طبيعياً ومضحكاً قليلاً ومناسباً للموقف بالعامية المصرية حصراً.";

            const payload = {
                contents: [{ parts: [{ text: userQuery }] }],
                systemInstruction: {
                    parts: [{ text: systemPrompt }]
                },
                config: {
                    temperature: 0.9,
                    responseMimeType: "text/plain" // نطلب نص عادي
                }
            };

            try {
                const response = await fetch(API_URL + API_KEY, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                
                const result = await response.json();
                const generatedText = result.candidates?.[0]?.content?.parts?.[0]?.text || '';
                
                // تحليل النص الناتج (نتوقع قائمة مرقمة 1. 2. 3.)
                const lines = generatedText.split('\n')
                                            .map(line => line.replace(/^\d+\.\s*/, '').trim())
                                            .filter(line => line.length > 0)
                                            .slice(0, 3); // نأخذ أول 3 جمل فقط

                if (lines.length === 3) {
                    currentDialogText = lines.join('\n'); // حفظ النص كاملاً
                    lines.forEach((line, index) => {
                        dialogElements[index].textContent = line;
                    });
                    updateStatus("تم توليد الحوار بنجاح. ابدأ التسجيل!", 'success');
                } else {
                    dialogElements.forEach(el => el.textContent = "فشل التوليد. حاول مجدداً.");
                    updateStatus("فشل في تحليل الحوار، حاول التوليد مرة أخرى.", 'error');
                }

            } catch (error) {
                console.error("خطأ في الاتصال بـ Gemini:", error);
                updateStatus("خطأ في الاتصال بالشبكة أو API.", 'error');
            } finally {
                generateDialogButton.disabled = false;
            }
        }
        
        // ----------------------------------------------------
        //  4. منطق التسجيل الصوتي
        // ----------------------------------------------------
        
        recordBtn.addEventListener('click', async () => {
            if (!currentDialogText) {
                updateStatus("يجب توليد الحوار أولاً!", 'error');
                return;
            }
            
            // طلب إذن الميكروفون والبدء
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                mediaRecorder = new MediaRecorder(stream);
                audioChunks = [];
                finalAudioBlob = null;
                audioPlayerArea.classList.add('hidden');

                mediaRecorder.ondataavailable = event => {
                    audioChunks.push(event.data);
                };

                mediaRecorder.onstop = () => {
                    finalAudioBlob = new Blob(audioChunks, { type: 'audio/webm; codecs=opus' });
                    const audioUrl = URL.createObjectURL(finalAudioBlob);
                    audioPlayback.src = audioUrl;
                    audioPlayerArea.classList.remove('hidden');
                    submitBtn.disabled = false;
                    stream.getTracks().forEach(track => track.stop()); // إيقاف مدخل الميكروفون
                    recordingStatusElement.classList.add('hidden');
                };

                mediaRecorder.start();
                updateStatus("بدأ التسجيل. اقرأ الحوار بالترتيب الآن.", 'loading');
                recordingStatusElement.textContent = "جاري التسجيل...";
                recordingStatusElement.classList.remove('hidden');
                recordBtn.disabled = true;
                stopBtn.disabled = false;
                submitBtn.disabled = true;

            } catch (error) {
                console.error('خطأ في الوصول إلى الميكروفون:', error);
                updateStatus('فشل الوصول للميكروفون. تأكد من الإذن.', 'error');
            }
        });

        stopBtn.addEventListener('click', () => {
            if (mediaRecorder && mediaRecorder.state === 'recording') {
                mediaRecorder.stop();
                recordBtn.disabled = false;
                stopBtn.disabled = true;
                updateStatus("تم الإيقاف. يمكنك مراجعة الصوت والحفظ.", 'info');
            }
        });

        submitBtn.addEventListener('click', async () => {
            if (!userId) {
                updateStatus("الرجاء التأكد من تسجيل الدخول لحفظ الأداء.", 'error');
                return;
            }
            if (!finalAudioBlob) {
                updateStatus("لا يوجد تسجيل لحفظه.", 'error');
                return;
            }
            
            updateStatus("جاري حفظ الأداء... قد يستغرق الأمر بعض الوقت.", 'loading');
            submitBtn.disabled = true;
            
            try {
                // ملاحظة: لا يمكن تخزين الملفات الصوتية الكبيرة مباشرة في Firestore
                // يتم حفظ البيانات الوصفية (metadata) هنا فقط.
                // في تطبيق حقيقي، يتم رفع الـ Blob إلى Firebase Storage ثم حفظ رابط التخزين هنا.
                
                const newPerformanceRef = doc(db, `/artifacts/${appId}/users/${userId}/comic_performances`, new Date().getTime().toString());
                
                // حفظ البيانات الوصفية للتسجيل (بدون الملف الصوتي نفسه)
                await setDoc(newPerformanceRef, {
                    scene: sceneSelect.value,
                    generatedDialog: currentDialogText,
                    recordingDate: new Date().toISOString(),
                    audioMimeType: finalAudioBlob.type,
                    status: 'Pending Review', // في انتظار تقييم المعلم أو الذكاء الاصطناعي
                });
                
                // مسح البيانات بعد الحفظ الناجح
                finalAudioBlob = null;
                audioPlayerArea.classList.add('hidden');
                
                updateStatus("تم حفظ الأداء بنجاح! سيتم تقييمه قريباً.", 'success');
                
            } catch (error) {
                console.error("فشل في حفظ بيانات الأداء:", error);
                updateStatus("خطأ: فشل حفظ الأداء. حاول مجدداً.", 'error');
            } finally {
                submitBtn.disabled = false;
            }
        });

        // ----------------------------------------------------
        //  5. مستمعو الأحداث والبدء
        // ----------------------------------------------------

        generateDialogButton.addEventListener('click', generateComicDialog);
        
        initializeFirebase();
        updateStatus("جاهز. اختر مشهد واضغط على زر التوليد!", 'info');
    </script>
</body>
</html>
