/* Fictional teaching examples only. Dr. Anirudh must review every story and
   every urgency instruction before this demo is used with patients. */
window.OBGYN_STORIES = [
  {
    id: "positive-test", topic: "Pregnancy", title: "My home urine pregnancy test is positive. What should I do now?",
    intro: "A positive home urine pregnancy test can bring many feelings at once. This example shows one way to begin a calm conversation.",
    relate: ["You used a home urine pregnancy test and it showed two lines.", "You feel happy, worried, unsure, or all three.", "You are not sure when to book your first visit."],
    actions: ["Write down the first day of your last period, if you know it.", "Ask for a pregnancy appointment so a doctor can guide your next steps.", "Bring any reports and a list of medicines you take."],
    urgent: "A positive test alone is not usually an emergency. If you have heavy bleeding, severe tummy pain, feel faint, or feel very unwell, go to the nearest emergency department now or call 112.",
    dialogue: [
      ["PATIENT", "I used a home urine pregnancy test. It showed two lines. Does that mean it is positive?"],
      ["DOCTOR", "Two lines usually mean the test is positive. Let us talk about when you did the test and how you are feeling."],
      ["PATIENT", "I am happy, but also a little scared. I do not know what to do first."],
      ["DOCTOR", "That is a very normal mix of feelings. You do not need to figure everything out today. We can take it one step at a time."],
      ["PATIENT", "When should I come in?"],
      ["DOCTOR", "Please ask for an appointment soon. Bring your test result, any reports, and a list of medicines you take. I can explain what checks may be needed."],
      ["PATIENT", "Can I ask questions in Kannada? I may forget things in English."],
      ["DOCTOR", "Of course. You can speak in Kannada, English, Telugu, or Hindi. You can also bring someone you trust, if you want."],
      ["PATIENT", "Thank you. I feel better knowing I can ask everything."],
      ["DOCTOR", "You can ask one question at a time. I will explain the next step in simple words."]
    ]
  },
  {
    id: "nausea", topic: "Pregnancy", title: "I feel sick most of the day, and food is hard to keep down.",
    intro: "Nausea can make daily life hard. If you cannot keep drinks down, it is important to ask for medical advice.",
    relate: ["You feel sick through much of the day.", "You are finding it hard to eat or drink.", "You feel weak, dizzy, or worried about getting enough fluids."],
    actions: ["Tell a doctor how often you are being sick and what you can keep down.", "Share when you last passed urine and whether it looks much darker than usual.", "Do not start a medicine for nausea without checking that it is right for you."],
    urgent: "If you cannot keep fluids down, are passing very little urine, feel faint, or feel very weak, get medical help today. If you are very unwell, go to the nearest emergency department or call 112.",
    dialogue: [
      ["PATIENT", "I feel sick most of the day. Even water is hard to keep down."],
      ["DOCTOR", "I am sorry this is so hard. When did it start, and how many times have you been sick today?"],
      ["PATIENT", "It has been happening since yesterday. I have hardly passed urine today."],
      ["DOCTOR", "Thank you for telling me. Not being able to keep drinks down and passing very little urine needs medical advice today."],
      ["PATIENT", "Can I wait for my next check-up?"],
      ["DOCTOR", "Please do not wait for a routine visit. Contact a doctor or go to a nearby hospital today so someone can check you."],
      ["PATIENT", "Should I take the nausea tablet my neighbour gave me?"],
      ["DOCTOR", "Please do not take someone else’s medicine. A doctor can check what is safe for you and explain your choices."],
      ["PATIENT", "I was afraid I would be told it is just normal."],
      ["DOCTOR", "You did the right thing by asking. We will listen and check what support you need."]
    ]
  },
  {
    id: "spotting", topic: "Pregnancy", title: "I noticed a little blood when I wiped. I feel scared.",
    intro: "Seeing blood during pregnancy can feel frightening. A doctor needs to hear about it, even when the amount seems small.",
    relate: ["You saw pink, red, or brown blood on tissue or underwear.", "You have mild cramps or are unsure if you need help.", "You are worried about telling someone what you saw."],
    actions: ["Contact your pregnancy care team or a doctor for advice as soon as you can.", "Note when it started, how much there is, and any pain or other symptoms.", "If you can, take your pregnancy records when you go for care."],
    urgent: "Get urgent help now if the bleeding is heavy, you have strong tummy pain, shoulder pain, feel dizzy or faint, or feel very unwell. Go to the nearest emergency department or call 112.",
    dialogue: [
      ["PATIENT", "I saw a little blood when I wiped after using the toilet. I am scared."],
      ["DOCTOR", "I understand why that would worry you. When did you first notice it, and are you having any pain?"],
      ["PATIENT", "It was just now. I have a small cramp, but I am not sure if it is related."],
      ["DOCTOR", "Please tell a doctor or your pregnancy care team about the bleeding and the cramp. They can guide you after hearing more and checking you."],
      ["PATIENT", "Should I wait and see if it happens again?"],
      ["DOCTOR", "Please contact a health professional for advice rather than deciding to wait on your own."],
      ["PATIENT", "What if the bleeding becomes heavier?"],
      ["DOCTOR", "If it becomes heavy, you have strong pain, feel dizzy or faint, or feel very unwell, get emergency help now."],
      ["PATIENT", "I was worried you might say I am overreacting."],
      ["DOCTOR", "You are not overreacting. You are allowed to ask when something changes."]
    ]
  },
  {
    id: "movement", topic: "Pregnancy", title: "My baby has moved less than usual today.",
    intro: "When you already feel your baby move, a clear change from their usual pattern should be checked without delay.",
    relate: ["You are around 28 weeks pregnant in this made-up example.", "Your baby is moving less than they usually do.", "You are wondering whether to wait until your next appointment."],
    actions: ["Contact your maternity team or go to a hospital now for advice.", "Tell them how far along you are and when you last felt your baby move as usual.", "Do not wait until the next day if movements are reduced or have stopped."],
    urgent: "A change in your baby’s usual movement needs prompt attention. Contact your maternity team or go to the nearest hospital now. Do not wait until tomorrow. If you need emergency help, call 112.",
    dialogue: [
      ["PATIENT", "I am 28 weeks pregnant. My baby has moved less than usual today."],
      ["DOCTOR", "Thank you for calling. When did you last feel your baby move in the usual way?"],
      ["PATIENT", "This morning. I have been waiting, but the movements still feel less."],
      ["DOCTOR", "Please contact your maternity team or go to the hospital now so they can check you and your baby."],
      ["PATIENT", "Can I wait until my check-up tomorrow?"],
      ["DOCTOR", "Please do not wait until tomorrow. A change in movement is a reason to get advice now."],
      ["PATIENT", "Should I first try something at home and see if it changes?"],
      ["DOCTOR", "Please call or go in now rather than spending time trying things at home."],
      ["PATIENT", "I feel nervous about going in if everything is okay."],
      ["DOCTOR", "It is still the right choice to get checked. The team can listen to your concern and decide what care is needed."]
    ]
  },
  {
    id: "headache", topic: "Pregnancy", title: "This headache is strong, and my vision looks blurry.",
    intro: "A strong headache with a change in vision during pregnancy needs quick medical attention.",
    relate: ["The headache is strong or does not feel like your usual headache.", "Your vision is blurry or you see spots.", "You are pregnant and unsure whether this can wait."],
    actions: ["Get medical help now and say that you are pregnant.", "Ask someone you trust to go with you if that feels helpful.", "Take your pregnancy records and current medicine list, if they are nearby."],
    urgent: "Please seek urgent medical care now. If symptoms are severe, getting worse, or you feel very unwell, go to the nearest emergency department or call 112. Do not wait for a routine appointment.",
    dialogue: [
      ["PATIENT", "I am 30 weeks pregnant. I have a strong headache and my vision is blurry."],
      ["DOCTOR", "I am glad you called. When did the headache and blurry vision begin?"],
      ["PATIENT", "The headache started this afternoon. The blurry vision started a little later."],
      ["DOCTOR", "Please get checked urgently now. A doctor needs to assess you in person."],
      ["PATIENT", "Can I take a pain tablet and wait to see if it goes away?"],
      ["DOCTOR", "Please do not delay getting checked to see if it passes. Tell the team you are 30 weeks pregnant and have blurry vision."],
      ["PATIENT", "Can my sister come with me?"],
      ["DOCTOR", "Yes, if you would like her support. Please arrange to go now."],
      ["PATIENT", "I understand. I will get help now."],
      ["DOCTOR", "Good. If you feel worse on the way or it feels unsafe to travel, contact local emergency services."]
    ]
  },
  {
    id: "fluid-leak", topic: "Pregnancy", title: "I think some fluid may be leaking. Should I wait?",
    intro: "It can be hard to tell what a new wet feeling means. During pregnancy, a possible fluid leak should be checked promptly.",
    relate: ["Your underwear or clothes keep getting wet.", "You are not sure if the fluid is urine or something else.", "You have cramps, pain, fever, or feel unwell."],
    actions: ["Call your pregnancy care team or go to the hospital now for advice.", "Note when it began and what the fluid looked like, if you can.", "Do not use a tampon or put anything inside the vagina while waiting to be checked."],
    urgent: "Please contact your maternity team or go to a hospital now if you think fluid is leaking. Get emergency help if you also have heavy bleeding, strong pain, fever, or feel very unwell. Call 112 if you need emergency help.",
    dialogue: [
      ["PATIENT", "I am 33 weeks pregnant. My underwear keeps getting wet, but I do not know why."],
      ["DOCTOR", "That can be hard to judge. When did you first notice the wetness?"],
      ["PATIENT", "About an hour ago. It happened again after I changed."],
      ["DOCTOR", "Please call your maternity team or go to the hospital now so they can check what is happening."],
      ["PATIENT", "Could it just be urine?"],
      ["DOCTOR", "It may be difficult to tell at home. A health professional can help check it, so please do not wait for your next visit."],
      ["PATIENT", "Should I put something inside to check?"],
      ["DOCTOR", "No. Please do not put anything inside the vagina. Tell the team when the wetness started and what you noticed."],
      ["PATIENT", "I will ask my husband to take me."],
      ["DOCTOR", "That sounds good if you want him with you. Please get checked now."]
    ]
  },
  {
    id: "urine-pain", topic: "Pregnancy", title: "It burns when I pass urine. I am pregnant and worried.",
    intro: "Pain or burning when passing urine is worth telling a doctor about, especially during pregnancy.",
    relate: ["It hurts or burns when you pass urine.", "You need to pass urine more often than usual.", "You have pain low in your tummy, a fever, or feel unwell."],
    actions: ["Contact a doctor soon and explain that you are pregnant.", "Share when the burning began and whether you have fever, back pain, or feel sick.", "Do not take leftover antibiotics or someone else’s medicine."],
    urgent: "Get medical advice promptly. If you have a fever, pain in your back or side, vomiting, or feel very unwell, seek urgent in-person care today. Call 112 if you need emergency help.",
    dialogue: [
      ["PATIENT", "It burns when I pass urine. I am 12 weeks pregnant."],
      ["DOCTOR", "I am glad you told me. When did the burning begin? Do you also have a fever or back pain?"],
      ["PATIENT", "It started yesterday. I do not have a fever, but I keep needing the toilet."],
      ["DOCTOR", "Please contact a doctor soon so your symptoms can be checked. Tell them that you are pregnant."],
      ["PATIENT", "I have some antibiotics left from last year. Should I take them?"],
      ["DOCTOR", "Please do not take leftover antibiotics. A doctor needs to decide what checks or treatment are right for you."],
      ["PATIENT", "What if I start feeling worse?"],
      ["DOCTOR", "If you get a fever, back or side pain, vomiting, or feel very unwell, seek urgent care today."],
      ["PATIENT", "Thank you. I will call the clinic."],
      ["DOCTOR", "You are welcome. Please mention the burning and how far along you are."]
    ]
  },
  {
    id: "heavy-periods", topic: "Periods", title: "My periods are very heavy, and I feel tired.",
    intro: "Heavy periods can affect work, school, sleep and daily life. You do not have to dismiss them as something you must simply live with.",
    relate: ["You change your pad or menstrual product often.", "Bleeding lasts longer than you expect or includes large clots.", "You feel tired, weak, short of breath or worried about leaving home."],
    actions: ["Keep a note of how long bleeding lasts and how often you change products.", "Book a check-up to discuss the bleeding and tiredness.", "Bring any medicines or past reports you have."],
    urgent: "Seek urgent help if bleeding is very heavy, you feel faint, have severe pain, or feel short of breath or very weak. Go to the nearest emergency department or call 112 if you need emergency help.",
    dialogue: [
      ["PATIENT", "My periods are so heavy that I plan my day around the bathroom."],
      ["DOCTOR", "That sounds tiring. How long has this been happening, and how many days does the bleeding last?"],
      ["PATIENT", "For a few months. I also feel tired most days."],
      ["DOCTOR", "Thank you for telling me. Heavy bleeding and tiredness are both worth discussing at a check-up."],
      ["PATIENT", "I thought heavy periods were just something I had to put up with."],
      ["DOCTOR", "You do not have to ignore them. We can talk about your bleeding, health history and what checks may help."],
      ["PATIENT", "Should I write down how much I bleed?"],
      ["DOCTOR", "Yes, a simple note of how many days it lasts and how often you change your pad can help us understand it."],
      ["PATIENT", "What if I feel faint?"],
      ["DOCTOR", "If you feel faint, very weak, short of breath, or the bleeding is very heavy, seek urgent medical help."]
    ]
  },
  {
    id: "irregular-periods", topic: "Periods & pregnancy planning", title: "My periods do not come regularly. Can I still ask for help?",
    intro: "A changing cycle can raise questions, especially if you are hoping to become pregnant. A private conversation can help you decide what to do next.",
    relate: ["Your periods come at different times each month.", "You are trying to become pregnant and have questions.", "You feel shy or unsure about discussing your cycle."],
    actions: ["Write down the first day of each period, if you can.", "Share how long you have been trying to become pregnant, if that is part of your concern.", "Ask what checks might be useful for you; your plan depends on your own health."],
    urgent: "Irregular periods are not usually an emergency on their own. Get urgent help if you have severe pain, very heavy bleeding, fainting, or feel suddenly very unwell. Call 112 if you need emergency help.",
    dialogue: [
      ["PATIENT", "My periods come at different times. I am trying for a baby and do not know when to ask for help."],
      ["DOCTOR", "You can ask now. How long have your periods been irregular, and how long have you been trying?"],
      ["PATIENT", "It has been like this for a while. I feel shy talking about it."],
      ["DOCTOR", "You can speak openly here. These are common health questions, and I will listen without judging you."],
      ["PATIENT", "Should my husband come with me?"],
      ["DOCTOR", "You may bring him or someone else if you want. You are also welcome to come by yourself."],
      ["PATIENT", "What should I bring?"],
      ["DOCTOR", "If you have them, bring your past reports and a note of when your periods came. We can talk about what may help next."],
      ["PATIENT", "Will I need the same tests as everyone else?"],
      ["DOCTOR", "Not always. The doctor will explain which checks, if any, fit your own history and needs."]
    ]
  },
  {
    id: "after-birth-mood", topic: "After birth", title: "I have been crying a lot since the baby came. Is it okay to say that?",
    intro: "Life after birth can bring strong feelings. If sadness or worry is lasting or making daily life hard, please tell someone and ask for help.",
    relate: ["You feel low, worried or tearful on many days.", "Rest does not seem to help you feel better.", "You are finding it hard to manage or connect with people around you."],
    actions: ["Tell a doctor or trusted person how you have been feeling.", "Ask for support soon; you do not need to wait until things feel unbearable.", "If you can, ask someone you trust to stay with you while you get help."],
    urgent: "If you may hurt yourself or your baby, or you feel unsafe, get emergency help now and stay with someone you trust. Call 112 or go to the nearest emergency department.",
    dialogue: [
      ["PATIENT", "My baby is five weeks old. I have been crying a lot and I feel guilty about it."],
      ["DOCTOR", "I am sorry you are carrying this alone. How long have you been feeling this way?"],
      ["PATIENT", "Most days. I love my baby, but I feel overwhelmed and worried."],
      ["DOCTOR", "Thank you for being honest. These feelings matter, and support is available. We can talk about what you are experiencing."],
      ["PATIENT", "I thought I should be able to manage on my own."],
      ["DOCTOR", "You do not have to manage alone. Please tell someone you trust and arrange to speak with a health professional soon."],
      ["PATIENT", "Sometimes I worry that I might not be safe."],
      ["DOCTOR", "If you might hurt yourself or your baby, please get emergency help now and stay with someone you trust."],
      ["PATIENT", "I am glad I said it out loud."],
      ["DOCTOR", "I am glad too. You deserve support, and we can take the next step together."]
    ]
  }
];
