(() => {
  "use strict";
  const stories = window.OBGYN_STORIES || [];
  const byId = new Map(stories.map((story) => [story.id, story]));
  const params = new URLSearchParams(window.location.search);
  const requestedId = params.get("story");
  let story = byId.get(requestedId) || byId.get("positive-test") || stories[0];
  let activeLine = 0;

  const title = document.getElementById("conversationTitle");
  const label = document.getElementById("conversationLabel");
  const intro = document.getElementById("conversationIntro");
  const topic = document.getElementById("dialogueTopic");
  const progress = document.getElementById("dialogueProgress");
  const speaker = document.getElementById("speakerLabel");
  const text = document.getElementById("dialogueText");
  const dots = document.getElementById("dialogueDots");
  const previous = document.getElementById("previousQuestion");
  const next = document.getElementById("nextQuestion");
  const relateList = document.getElementById("relateList");
  const actionList = document.getElementById("actionList");
  const urgent = document.getElementById("urgentText");
  const storyGrid = document.getElementById("storyGrid");

  function addListItems(target, items) {
    target.replaceChildren();
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      target.append(li);
    });
  }

  function renderCard(item, index) {
    const link = document.createElement("a");
    link.className = "story-card";
    link.href = `?story=${encodeURIComponent(item.id)}#conversationSection`;
    link.setAttribute("aria-current", item.id === story.id ? "true" : "false");
    const number = document.createElement("span");
    number.className = "story-number";
    number.textContent = `STORY ${String(index + 1).padStart(2, "0")} · ${item.topic.toUpperCase()}`;
    const quote = document.createElement("span");
    quote.className = "story-quote";
    quote.textContent = `“${item.title}”`;
    const tease = document.createElement("span");
    tease.className = "story-tease";
    tease.textContent = item.intro;
    const cta = document.createElement("span");
    cta.className = "story-card-link";
    cta.innerHTML = "Read this conversation <b aria-hidden=\"true\">↗</b>";
    link.append(number, quote, tease, cta);
    return link;
  }

  function renderStoryList() {
    if (!storyGrid) return;
    storyGrid.replaceChildren(...stories.map(renderCard));
  }

  function renderDots() {
    dots.replaceChildren();
    story.dialogue.forEach((line, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("aria-label", `Show part ${index + 1} of ${story.dialogue.length}`);
      if (index === activeLine) button.setAttribute("aria-current", "step");
      button.addEventListener("click", () => { activeLine = index; renderLine(); });
      dots.append(button);
    });
  }

  function renderLine() {
    const [who, words] = story.dialogue[activeLine];
    topic.textContent = `${story.topic.toUpperCase()} · FICTIONAL EXAMPLE`;
    progress.textContent = `${String(activeLine + 1).padStart(2, "0")} / ${String(story.dialogue.length).padStart(2, "0")}`;
    speaker.textContent = who;
    text.textContent = words;
    previous.disabled = activeLine === 0;
    next.innerHTML = activeLine === story.dialogue.length - 1 ? "Start again <span aria-hidden=\"true\">↻</span>" : "Next <span aria-hidden=\"true\">→</span>";
    dots.querySelectorAll("button").forEach((button, index) => {
      if (index === activeLine) button.setAttribute("aria-current", "step");
      else button.removeAttribute("aria-current");
    });
  }

  function loadStory(selected) {
    story = selected;
    activeLine = 0;
    title.textContent = story.title;
    label.textContent = `STORY ${String(stories.indexOf(story) + 1).padStart(2, "0")} · ${story.topic.toUpperCase()}`;
    intro.textContent = story.intro;
    urgent.textContent = story.urgent;
    addListItems(relateList, story.relate);
    addListItems(actionList, story.actions);
    renderDots();
    renderLine();
    renderStoryList();
  }

  previous?.addEventListener("click", () => {
    if (activeLine > 0) { activeLine -= 1; renderLine(); }
  });
  next?.addEventListener("click", () => {
    activeLine = activeLine === story.dialogue.length - 1 ? 0 : activeLine + 1;
    renderLine();
  });

  if (story && title && dots && previous && next) {
    loadStory(story);
    if (requestedId && byId.has(requestedId)) {
      window.setTimeout(() => document.getElementById("conversationSection")?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }
})();
