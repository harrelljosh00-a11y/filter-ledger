# Avatar Guidelines: Wren

**Wren is fictional and AI-generated.** She is never presented as a real person, customer or product tester.

## 1. Name
Wren (no surname used publicly). Handle style: "Wren · Filter Ledger's AI host".

## 2. Fictional background
Wren is Filter Ledger's AI host, created to read certification listings and water reports so viewers don't have to. Her "backstory" is her job: she explains documents. She has **no** invented personal history: no "as a mom of two", no "when I installed mine".

## 3. Personality
Curious, steady, a little wry. Allergic to hype. Enjoys a good spec sheet.

## 4. Communication style
- Hook as a question: "Does your pitcher filter actually reduce lead?"
- One claim per video, then a verdict badge (CERTIFIED / LAB-TESTED / CLAIM ONLY), then the source on screen.
- 30–45 seconds, a 6th–8th grade reading level, and captions always on.
- Signature sign-off: **"Checked. Link's in the comments."**

## 5. Visual appearance
Woman who looks to be in her early 30s, warm medium skin tone, shoulder-length dark brown hair in a loose low bun, light freckles, friendly asymmetrical smile. Illustrated-realistic style (a polished digital painting), **not** photorealistic. That makes the AI nature obvious and keeps her consistent across tools.

## 6. Clothing
A Ledger Blue (#1F6FB2) chore jacket or cardigan over a white tee; a small droplet pin on the lapel. No branded clothing.

## 7. Brand colors
Same palette as BRAND_GUIDELINES.md. Backgrounds: Clear (#E8F3FA) or a soft-focus bright kitchen.

## 8. Facial characteristics (consistency anchors)
Oval face, defined dark eyebrows, brown eyes, a small beauty mark under the left eye, light freckles across the nose. Keep **all four anchors** in every prompt.

## 9. Photography / render style
Soft daylight from the left, shallow depth of field, 35 mm-equivalent framing, clean kitchen or plain studio backdrop, slight paper texture to signal "illustrated".

## 10. Voice and narration
- Free TTS voice: warm, mid-pitch, neutral US accent, about 160 words/min. Check each tool's commercial-use license before use.
- Because the voice is synthetic and realistic, Meta requires an AI label on the video. **Always apply "AI info"/"AI creator" labels.**

## Image library: generation prompts
Use one tool for the whole library (consistency), and save the tool name and its commercial-terms URL in OPERATIONS_LOG.md.

Base prompt (prefix every prompt with this):
> Illustrated-realistic digital painting of "Wren", a friendly woman in her early 30s, warm medium skin tone, shoulder-length dark brown hair in a loose low bun, light freckles across nose, small beauty mark under left eye, defined dark eyebrows, brown eyes, asymmetrical warm smile, wearing a blue (#1F6FB2) chore jacket over a white t-shirt with a small silver water-droplet pin, soft daylight from the left, subtle paper texture, clean modern style, no text, no logos.

| # | Asset | Add to base prompt | Aspect |
|---|---|---|---|
| 1 | Headshot (neutral) | head and shoulders, plain light-blue (#E8F3FA) background, looking at camera | 1:1 |
| 2 | Headshot (smiling) | same, broad smile | 1:1 |
| 3 | Full body | standing, hands relaxed, plain light-blue background | 2:3 |
| 4 | Product presentation | gesturing with open left palm toward empty space at frame right (product will be composited), bright kitchen background | 9:16 |
| 5 | Educational pose | holding a clipboard, pointing at it, slight head tilt | 9:16 |
| 6 | Thinking | finger on chin, skeptical half-smile | 1:1 |
| 7 | Surprised | eyebrows raised, mouth slightly open, hands up | 1:1 |
| 8 | Verdict thumbs-up | thumbs up, confident | 1:1 |
| 9 | Lifestyle | sitting at kitchen island reading paperwork, morning light | 16:9 |
| 10 | Vertical video frame | waist-up, centered, extra empty space above head for captions | 9:16 |

Status: **prompts ready, images not yet generated.** I can't make raster images in this workspace. Generation will happen in Josh's chosen tool (PENDING_APPROVALS.md #5).
