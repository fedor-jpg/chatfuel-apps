# Build plan: OwnYourProduct, salon playbook

The scaffold you are in is the OwnYourProduct preset in its salon playbook (AgendaConmigo): a beauty salon's day on
Chatfuel — bookings, clients, a knowledge base, and Comment Studio, which
answers every Instagram comment with buying intent with a fixed public reply
and a fixed Direct carrying the salon's prices (no AI, no usage cost). The
salon's own modules (Bookings, Contacts, Knowledge Base, Automations, Channels,
Auth, Admin) are the wizard's; the overlay adds `src/modules/salon-onboarding/`
(Preparar, the one-sitting setup) and `src/modules/comment-studio/`.

Every user-facing string of Comment Studio lives in
`src/modules/comment-studio/screen-copy.ts` (Spanish, English, Portuguese);
the bot's generated texts live in `src/modules/comment-studio/prefill.ts`.
Preparar's strings live in `src/modules/salon-onboarding/prepare-copy.ts`, its
service presets in `service-presets.ts` and the price anchors per country in
`price-anchors.ts`. Edit copy there, never inline in components. The default
keyword lists per language are in `comment-studio-model.ts`.

The screen follows the browser's language and remembers the choice made in
its ES / PT / EN switch. The labels quoted below are the Spanish ones: pick ES
in the switch before verifying.

Work through the steps in order and verify each before the next.

## 1. Register the Comment Studio and Preparar modules

The wizard generates `src/modules/index.ts` from the modules it installed, so
the overlay could not add to it (wizard-owned). You can:

1. In `src/modules/index.ts`: import `moduleDescriptor as salonOnboarding`
   from `./salon-onboarding` and `moduleDescriptor as commentStudio` from
   `./comment-studio`; put them FIRST in `MODULES`, Preparar before Comment
   Studio. The shell sends `/` to the first rail module, so a new salon lands
   on Preparar and, once set up, one tap away from Comment Studio.
2. In `src/modules/navGroups.tsx`: add `'salon-onboarding'` to the `crm`
   group, before `'bookings'`, and `'comment-studio'` to the `ai` group,
   before `'automations'`.

Verify: `npm run check` passes, `/` redirects to `/salon-onboarding`, and with
ES selected the screen renders "Tu negocio" with a "Continuar" button;
`/comment-studio` renders the header "Comment Studio" with the status tag
"Apagado" and the language switch ES / PT / EN.

## 2. Run the modules' tests and the typecheck

The overlay ships its own tests: Comment Studio's write plan, runner contract,
read-back and generated texts; Preparar's publish plan, its idempotent runner
and a white-screen guard for each screen. Preparar needs `libphonenumber-js`,
which the manifest declares and the wizard installs.

Verify: `npx vitest run src/modules/comment-studio src/modules/salon-onboarding`
reports every test passed, and `npm run check` is clean.

## 3. Set a salon up with Preparar

Sign in and open `/salon-onboarding`. Enter the business (name, country,
phone, address), pick the specialities, keep or edit the suggested services
and prices, set the week's hours and the team, review, press "Guardar y
empezar".

Verify: Bookings shows the services with their prices and durations and one
specialist per person entered, each performing every service, with the week's
hours; the Knowledge Base shows the company name, phone, address, business
hours and a cancellation rule in the additional instructions; Bookings settings
show appointment confirmation switched on. Pressing "Guardar y empezar" again
creates nothing twice.

## 4. Connect Instagram and turn Comment Studio on

Sign in, connect the salon's Instagram account in Channels, enter two or
three services with prices in the Knowledge Base, then open Comment Studio:
the Direct card shows a message quoting those services in the chosen
language, and the Instagram notice is gone. Press "Encender".

Verify: in Automations, the Instagram post-comments source has a rule named
"AgendaConmigo · preguntas de precio y hora" that is enabled, with the keyword
filter, the public reply and the private reply as exact text; the Instagram
Direct, link-in-bio and story sources are off; back in Comment Studio the tag
reads "Activo". Comment "precio?" on a post from another account: the public
reply lands under the comment and the Direct arrives.

## 5. Sign-up lands in Preparar

A new salon that signs up through the auth module gets its bot from the
wizard's sign-up flow and is sent to `/`, which step 1 made Preparar. Keep it
that way: the first minute must be "your services, your hours, done", not a
tour of seven modules.

Verify: sign up with a fresh e-mail; the first screen is Preparar on "Tu
negocio".

## Out of scope

- No AI conversation: Comment Studio writes fixed texts only. The AI Booking
  add-on (the product's "full" mode) is a later app version.
- No post picker of its own: choosing specific posts happens in Automations,
  in the rule Comment Studio owns; the screen only shows how many are chosen
  and never overwrites that choice.
- No ads, no WhatsApp, no marketplace: Instagram ad comments belong to a
  separate Ads app and are never touched here.
- No extra server routes and no custom migrations in this version: the salon's
  data is the Knowledge Base's and Bookings' own.
