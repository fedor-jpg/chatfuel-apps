// Every Spanish string the Instagram product shows, in one file.
//
// WHY ONE FILE: the salon must not feel she changed products. Stage 1's copy is
// Diego's, verbatim from his compiled bundle; Stage 2 has no bundle to copy
// from, so the next best thing is a single place where the register can be read
// end to end and compared against his.
//
// PROVENANCE TAGS on every block:
//   [DIEGO]  copied verbatim from real.pretty.js — his word, his casing.
//   [PLAN]   specified verbatim in stage-2-plan.md (§3.1 rung names, §3.6 the
//            "nunca promete diseños" line). Those are product decisions already
//            made; this file may not paraphrase them.
//   [OURS]   written here, in his register: tú, short sentences, no jargon, no
//            English, no exclamation marks, and never a promise the API cannot
//            keep.
//
// The rule that produced the awkward sentences: where the API cannot do a
// thing, the copy says so in one line instead of implying a feature. "El bot
// puede pedirla, pero no la cobra" is uglier than "Cobra tu seña automáticamente"
// and it is the only one of the two that is true.
//
// EVERY BLOCK IS NOW A TABLE. The Spanish below is untouched — it is the same
// object it always was, moved under `es`. The `en` twin is the same sentences
// in the same register for an owner who does not read Spanish; it says the same
// ugly true things, and it promises nothing more than the Spanish does.
// The exports stay objects (`live`), so the ~forty call sites still read `T.key`.

import { defineCopy, live } from "./lib/language";

// ---------------------------------------------------------------------------
// product chrome
// ---------------------------------------------------------------------------

export const PRODUCT = live(
  defineCopy("ig.product", {
    es: {
      /** [DIEGO] "Instagram" — his own label, in the profile form and the landing. */
      name: "Instagram",
      /** [OURS] the switch back to the calendar. His tab is "Agenda". */
      agenda: "Agenda",
      subtitle: "Responde tus mensajes y comentarios, y agenda las citas por ti.",
      /** [DIEGO] "Cargando..." */
      loading: "Cargando...",
      /** [DIEGO] "Volver" */
      back: "Volver",
      /** [DIEGO] "Guardar Cambios" */
      save: "Guardar Cambios",
      /** [DIEGO] "Guardando..." is the in-flight label on every one of his forms. */
      saving: "Guardando...",
      /** [DIEGO] "Error desconocido" */
      unknownError: "Error desconocido",
      settings: "Ajustes",
      businessData: "Datos del negocio",
      profileServicesTeam: "Perfil, servicios y equipo",
      safetyChecking: "Estamos dejando el asistente apagado mientras lo configuras.",
      safetyFailed: "No pudimos confirmar que el asistente esté apagado. Reintenta antes de continuar.",
      retry: "Reintentar",
    },
    en: {
      name: "Instagram",
      agenda: "Calendar",
      subtitle: "Answers your messages and comments, and books appointments for you.",
      loading: "Loading...",
      back: "Back",
      save: "Save Changes",
      saving: "Saving...",
      unknownError: "Unknown error",
      settings: "Settings",
      businessData: "Business details",
      profileServicesTeam: "Profile, services and team",
      safetyChecking: "We are keeping the assistant off while you set it up.",
      safetyFailed: "We could not confirm that the assistant is off. Retry before continuing.",
      retry: "Retry",
    },
    pt: {
      name: "Instagram",
      agenda: "Agenda",
      subtitle: "Responde mensagens e comentários e agenda horários para você.",
      loading: "Carregando...",
      back: "Voltar",
      save: "Salvar alterações",
      saving: "Salvando...",
      unknownError: "Erro desconhecido",
      settings: "Configurações",
      businessData: "Dados do negócio",
      profileServicesTeam: "Perfil, serviços e equipe",
      safetyChecking: "Estamos mantendo o assistente desligado enquanto você o configura.",
      safetyFailed: "Não foi possível confirmar que o assistente está desligado. Tente novamente antes de continuar.",
      retry: "Tentar novamente",
    },
  }),
);

// ---------------------------------------------------------------------------
// Automatizaciones — the home screen (2026-08-28 redesign)
// ---------------------------------------------------------------------------

/** The owner dashboard — the first tab. What Instagram brings to the salon. */
export const PANEL = live(
  defineCopy("ig.panel", {
    es: {
      title: "Panel",
      subtitle: "Lo que Instagram le trae a tu salón.",
      connectedChip: "Conectada",

      rHoy: "Hoy",
      r7: "7 días",
      r30: "30 días",
      rTodo: "Todo",

      kConversaciones: "Conversaciones",
      kUnread: (n: number) => (n === 1 ? "1 sin responder" : `${n} sin responder`),
      kClientas: "Clientas nuevas",
      kCitas: "Citas agendadas",
      kUpcoming: (n: number) => (n === 1 ? "+1 próxima" : `+${n} próximas`),
      kIngresos: "Ingresos",
      kPending: (n: number) => (n === 1 ? "1 por cobrar" : `${n} por cobrar`),

      funnelTitle: "Del mensaje a la cita",
      /** Every step counts PEOPLE, so the bars can only ever narrow. */
      funnelLead: "De cada clienta que escribe, cuántas terminan pagando.",
      fConv: "Escribieron",
      fAsk: "Pidieron cita",
      fBook: "Agendaron",
      fPaid: "Pagaron",

      chartTitle: "Citas por día",
      chartLead: "Últimas dos semanas.",
      chartEmpty: "Sin citas en este período todavía.",

      topTitle: "Servicios más pedidos",
      topEmpty: "Aún no hay citas de Instagram en este período.",

      convTitle: "Últimas conversaciones",
      convEmpty: "Aún no hay conversaciones.",
      convCita: "Cita agendada",
      /** Full autonomy: a Pending row is the assistant finishing the booking. */
      convPending: "Agendando…",
      convWaits: "Espera respuesta",
      verBandeja: "Ver bandeja",

      /** The conversation numbers come from a capped scan; say so, never imply zero. */
      convsFailed: "No se pudieron cargar las conversaciones.",
      convsTruncated: (n: number) =>
        `Contando sobre las últimas ${n} conversaciones — puede haber más.`,
      retry: "Reintentar",
    },
    en: {
      title: "Dashboard",
      subtitle: "What Instagram brings to your salon.",
      connectedChip: "Connected",

      rHoy: "Today",
      r7: "7 days",
      r30: "30 days",
      rTodo: "All",

      kConversaciones: "Conversations",
      kUnread: (n: number) => (n === 1 ? "1 unanswered" : `${n} unanswered`),
      kClientas: "New clients",
      kCitas: "Appointments booked",
      kUpcoming: (n: number) => (n === 1 ? "+1 upcoming" : `+${n} upcoming`),
      kIngresos: "Revenue",
      kPending: (n: number) => (n === 1 ? "1 to collect" : `${n} to collect`),

      funnelTitle: "From message to appointment",
      funnelLead: "Of every client who writes, how many end up paying.",
      fConv: "Wrote",
      fAsk: "Asked to book",
      fBook: "Booked",
      fPaid: "Paid",

      chartTitle: "Appointments per day",
      chartLead: "Last two weeks.",
      chartEmpty: "No appointments in this period yet.",

      topTitle: "Most requested services",
      topEmpty: "No Instagram appointments in this period yet.",

      convTitle: "Latest conversations",
      convEmpty: "No conversations yet.",
      convCita: "Appointment booked",
      convPending: "Booking…",
      convWaits: "Waiting for a reply",
      verBandeja: "View inbox",

      convsFailed: "We could not load the conversations.",
      convsTruncated: (n: number) =>
        `Counting over the last ${n} conversations — there may be more.`,
      retry: "Retry",
    },
    pt: {
      title: "Painel",
      subtitle: "O que o Instagram traz para o seu negócio.",
      connectedChip: "Conectado",
      rHoy: "Hoje",
      r7: "7 dias",
      r30: "30 dias",
      rTodo: "Tudo",
      kConversaciones: "Conversas",
      kUnread: (n: number) => n === 1 ? "1 sem resposta" : `${n} sem resposta`,
      kClientas: "Novas clientes",
      kCitas: "Agendamentos",
      kUpcoming: (n: number) => n === 1 ? "+1 próximo" : `+${n} próximos`,
      kIngresos: "Receita",
      kPending: (n: number) => n === 1 ? "1 a receber" : `${n} a receber`,
      funnelTitle: "Da mensagem ao agendamento",
      funnelLead: "De cada cliente que escreve, quantas acabam pagando.",
      fConv: "Escreveram",
      fAsk: "Pediram horário",
      fBook: "Agendaram",
      fPaid: "Pagaram",
      chartTitle: "Agendamentos por dia",
      chartLead: "Últimas duas semanas.",
      chartEmpty: "Ainda não há agendamentos neste período.",
      topTitle: "Serviços mais procurados",
      topEmpty: "Ainda não há agendamentos do Instagram neste período.",
      convTitle: "Conversas recentes",
      convEmpty: "Ainda não há conversas.",
      convCita: "Agendamento concluído",
      convPending: "Agendando…",
      convWaits: "Aguardando resposta",
      verBandeja: "Ver caixa de entrada",
      convsFailed: "Não foi possível carregar as conversas.",
      convsTruncated: (n: number) => `Contagem das últimas ${n} conversas — pode haver mais.`,
      retry: "Tentar novamente",
    },
  }),
);

/**
 * [OURS] "Cambiar esto" — the sheet that opens under a message the bot sent.
 *
 * Written as SHE would describe the annoyance ("respondió donde la ven todas"),
 * never as the setting is named. The `sub` line always says what changes
 * everywhere else, because one tap under one message changes the bot for every
 * conversation and that must not be a surprise.
 */
export const FIX = live(
  defineCopy("ig.fix", {
    es: {
      /** The link under a bot bubble. */
      open: "Cambiar esto",

      titlePublic: "El asistente respondió donde la ven todas.",
      titleDirect: "El asistente respondió por Direct.",
      lead: "¿Qué cambiamos?",
      cancel: "Así está bien",

      publicOffLabel: "Que no responda en público",
      publicOffSub: "Sigue contestando por Direct, pero no deja nada bajo el comentario.",
      publicOffDone: "Listo: ya no responde en público.",


      pricesOffLabel: "Que no dé precios por aquí",
      pricesOffSub: "Pregunta qué servicio quiere y te deja a ti el valor. En todas las conversaciones.",
      pricesOffDone: "Listo: ya no da precios por Direct.",

      /** Closes the confirmation. Not "Guardar" — it is already saved. */
      close: "Listo",
      undo: "Deshacer",
      undone: "Lo dejamos como estaba.",
      /** No lever left to pull on this message. */
      nothing: "Aquí no hay nada que cambiar: ya está configurado así.",
      directInSettings: "Este mensaje se cambia en Asistente → Mensaje por Direct.",
      /** The assistant is off, so nothing it did can be changed. */
      off: "Tu asistente está apagado.",
    },
    en: {
      open: "Change this",

      titlePublic: "The assistant replied where everyone can see it.",
      titleDirect: "The assistant replied by Direct.",
      lead: "What do we change?",
      cancel: "This is fine",

      publicOffLabel: "Do not reply in public",
      publicOffSub: "It keeps replying by Direct, but leaves nothing under the comment.",
      publicOffDone: "Done: it no longer replies in public.",


      pricesOffLabel: "Do not give prices here",
      pricesOffSub: "It asks which service she wants and leaves the price to you. In every conversation.",
      pricesOffDone: "Done: it no longer gives prices by Direct.",

      close: "Done",
      undo: "Undo",
      undone: "We left it as it was.",
      nothing: "There is nothing to change here: it is already set up this way.",
      directInSettings: "This message is changed in Assistant → Direct message.",
      off: "Your assistant is off.",
    },
    pt: {
      open: "Alterar isto",
      titlePublic: "O assistente respondeu onde todos podem ver.",
      titleDirect: "O assistente respondeu pelo Direct.",
      lead: "O que devemos alterar?",
      cancel: "Está bom assim",
      publicOffLabel: "Não responder em público",
      publicOffSub: "Continua respondendo pelo Direct, mas não deixa nada abaixo do comentário.",
      publicOffDone: "Pronto: não responde mais em público.",
      pricesOffLabel: "Não informar preços por aqui",
      pricesOffSub: "Pergunta qual serviço a cliente procura e deixa o valor para você. Em todas as conversas.",
      pricesOffDone: "Pronto: não informa mais preços pelo Direct.",
      close: "Concluir",
      undo: "Desfazer",
      undone: "Deixamos como estava.",
      nothing: "Não há nada para alterar aqui: já está configurado dessa forma.",
      directInSettings: "Esta mensagem é alterada em Assistente → Mensagem no Direct.",
      off: "Seu assistente está desligado.",
    },
  }),
);

/**
 * [OURS] Two switches, named by OUTCOME (what she gets), never by mechanism.
 * v1's four bundle switches, the nested checkbox and the "¿Quién confirma las
 * citas nuevas?" question are gone — the founder's cut: "убери ручное
 * подтверждние встреч / макро модули только оставить".
 */
// -- the texts the bot actually sends -----------------------------------------
//
// NOT screen chrome, and the one block in this file that must NOT follow the
// language the person looking at the screen picked.
//
// These four are written into the salon's live Chatfuel bot — `prefill.ts:336`
// hands them to `modes.ts:236-244`, which stores them as `exactTextReply` and
// `messagePrompt`. They are the words a STRANGER reads under her post and in
// her Direct. Two things go wrong if they follow `appLanguage()`:
//
//   - the QA preview (`?lang=en`) would answer her Chilean clients in English;
//   - worse, `Automatizaciones.tsx` compares the bot's stored texts against
//     these to decide whether it has drifted, so merely OPENING the product in
//     another language would look like drift and trigger a silent write that
//     translates her live bot without her touching anything.
//
// So they are declared once and shared by every language, deliberately. The day
// the product ships to a Brazilian or American salon, these must follow the
// SALON's own language read from her profile — never the reader's.
//
// Every PrivateReply/PublicReply write validates `exactTextReply` AND
// `messagePrompt` non-empty REGARDLESS of the mode, so all four ship with a
// real value and none of them is ever left blank.
const BOT_TEXTS_ES = {
  /** Light mode: the one fixed message the comment triggers. */
  dmFixedText:
    "¡Hola! Gracias por escribir 💜 Te paso los precios y las horas que tengo libres por aquí. ¿Qué servicio te interesa?",
  /** Full mode: how the AI opens the Direct after a comment. */
  dmPrompt:
    "Salúdala por su nombre si lo sabes, responde con tus precios y horarios lo que preguntó en el comentario, y ofrécele una hora concreta.",
  /** The public reply under the comment, when the AI writes it. */
  publicPrompt:
    "Responde el comentario en una línea, cercana y sin dar precios, y dile que le escribiste al Direct.",
  /** The public reply when it is a fixed text. */
  publicFixedText: "¡Hola! Te escribí al Direct 💜",
} as const;

const BOT_TEXTS_EN = {
  dmFixedText: "Hi! Thanks for reaching out 💜 I can send you our prices and available times here. Which service are you interested in?",
  dmPrompt: "Greet the client by name when you know it, answer their comment using the business's prices and availability, and offer a specific time.",
  publicPrompt: "Reply to the comment in one warm sentence without listing prices, and say you sent a Direct message.",
  publicFixedText: "Hi! I sent you a Direct message 💜",
} as const;

const BOT_TEXTS_PT = {
  dmFixedText: "Oi! Obrigada por escrever 💜 Posso te enviar os preços e os horários disponíveis por aqui. Qual serviço você procura?",
  dmPrompt: "Cumprimente a cliente pelo nome quando souber, responda ao comentário usando os preços e horários disponíveis do negócio e ofereça um horário específico.",
  publicPrompt: "Responda ao comentário em uma frase acolhedora, sem informar preços, e diga que enviou uma mensagem no Direct.",
  publicFixedText: "Oi! Enviei uma mensagem no Direct 💜",
} as const;

export const AUTOMATIZACIONES = live(
  defineCopy("ig.automatizaciones", {
    es: {
      /** The tab label. "Automatizaciones" ellipsised to "Automatiza…" at 375px,
       *  and the screen is one assistant now, so it says so. */
      title: "Asistente",
      subtitle: "Elige una opción. Puedes ajustar los detalles cuando quieras.",

      // -- the two modes ----------------------------------------------------------

      fullTitle: "AI Booking · Agenda por ti",
      fullTag: "Complemento con IA",
      // One line each. The thread below now SHOWS the steps these used to describe,
      // and three lines of prose on top of three bubbles pushed the second card off
      // the phone entirely.
      fullBody: "Responde, ofrece horarios y deja la cita en tu agenda.",
      fullF2: "Ofrece tus horas y agenda sin preguntarte",
      fullF3: "Te pasa la conversación si se traba",

      liteTitle: "Comment Studio · Sigues tú",
      liteTag: "Incluido",
      liteBody: "Envía tus precios por Direct. Después sigues tú.",
      liteF3: "Tú continúas la conversación",

      // -- the drafted conversation the card shows --------------------------------
      //
      // The three tick-lines said what the assistant WOULD do. These label the
      // draft it will actually send, built in prefill.ts from her own catalogue.

      /** Channel label above the public bubble. */
      previewPublic: "En público",
      /** Channel label above the Direct bubble. */
      previewDm: "Por Direct",
      /** Said under a thread whose Direct is written by the assistant. */
      previewExample: "El mensaje público va tal cual; el Direct usa tus precios y tu agenda.",
      /** Said under a thread whose Direct is a literal string. */
      previewFixed: "El mensaje público y el primer Direct van tal cual.",
      grounding: (serviceCount: number, hours: string | null, quotePrices: boolean): string => {
        const facts = [
          serviceCount && quotePrices
            ? `tus ${serviceCount === 1 ? "precios" : `${serviceCount} servicios más pedidos`}`
            : "",
          hours ? `tu horario ${hours}` : "",
        ].filter(Boolean);
        if (!facts.length) return "";
        const update = quotePrices
          ? " Cambia un precio en Servicios y el mensaje se actualiza solo."
          : "";
        return `Sale de ${facts.join(" y ")}.${update}`;
      },

      working: "Seleccionado",
      selectedDraft: "Elegido · aún sin activar",
      pick: "Elegir este modo",
      completeFirst: "Completa los datos primero",
      /** No mode is running. Said above the cards, not inside one. */
      offLead: "Tu asistente está apagado: no responde nada. Toca un modo para encenderlo.",
      turnOff: "Apagar el asistente",

      // -- the disclosure ---------------------------------------------------------

      tune: "Ajustar este modo",
      optPublic: "Responder también en público",
      optPublicBody: "Deja la respuesta bajo el comentario, donde la ven todas.",
      optStories: "Responder las historias",
      optStoriesBody: "Quien contesta tu historia entra al mismo flujo.",
      optKeywords: "Solo a quien pregunta precio u hora",
      optKeywordsBody: "Los demás comentarios se quedan sin respuesta automática.",
      optFirstDirect: "Primer mensaje por Direct",
      optFirstDirectBody: "Elige si sale tal cual o lo redacta la IA con tus datos.",
      replyOff: "No responder",
      replyFixed: "Texto fijo",
      replyAi: "Con IA",

      // -- toasts and states ------------------------------------------------------

      fullToast: "Listo: el asistente agenda por ti.",
      liteToast: "Listo: contesta y tú cierras.",
      offToast: "Asistente apagado.",
      saved: "Guardado.",
      previewChanges: (n: number): string => `${n} ${n === 1 ? "cambio preparado" : "cambios preparados"}`,
      /** A requested activation failed after one or more writes. */
      brokenShape: "No se pudo activar. Revisa el preview e inténtalo de nuevo.",

      loadFailed: "No se pudieron cargar las automatizaciones.",
      retry: "Reintentar",
      activateAndTest: "Activar y probar",
      activateMode: (mode: string): string => `Activar ${mode}`,
      testMode: "Probar en Instagram",
      activationPreparing: "Estamos terminando de preparar una conexión segura. Tus ajustes ya están guardados.",
      confirmActivation: "¿Activar este modo y probarlo?",
      back: "Volver",

      ...BOT_TEXTS_ES,
    },
    en: {
      title: "Assistant",
      subtitle: "Pick an option. You can adjust the details whenever you want.",

      // -- the two modes ----------------------------------------------------------

      fullTitle: "AI Booking · Books for you",
      fullTag: "AI add-on",
      fullBody: "It replies, offers times and leaves the appointment in your calendar.",
      fullF2: "Offers your times and books without asking you",
      fullF3: "Hands you the conversation if it gets stuck",

      liteTitle: "Comment Studio · You carry on",
      liteTag: "Included",
      liteBody: "It sends your prices in a DM. Then you carry on.",
      liteF3: "You continue the conversation",

      // -- the drafted conversation the card shows --------------------------------

      previewPublic: "In public",
      previewDm: "By Direct",
      previewExample: "The public message goes as it is; the Direct uses your prices and your calendar.",
      previewFixed: "The public message and the first Direct go as they are.",
      grounding: (serviceCount: number, hours: string | null, quotePrices: boolean) => {
        const facts = [
          serviceCount && quotePrices
            ? `your ${serviceCount === 1 ? "price" : `${serviceCount} most requested services`}`
            : "",
          hours ? `your hours ${hours}` : "",
        ].filter(Boolean);
        if (!facts.length) return "";
        const update = quotePrices
          ? " Change a price in Services and the message updates automatically."
          : "";
        return `Built from ${facts.join(" and ")}.${update}`;
      },

      working: "Selected",
      selectedDraft: "Chosen · not live yet",
      pick: "Choose this mode",
      completeFirst: "Complete your details first",
      offLead: "Your assistant is off: it answers nothing. Tap a mode to turn it on.",
      turnOff: "Turn off the assistant",

      // -- the disclosure ---------------------------------------------------------

      tune: "Adjust this mode",
      optPublic: "Reply in public too",
      optPublicBody: "It leaves the reply under the comment, where everyone can see it.",
      optStories: "Reply to stories",
      optStoriesBody: "Whoever answers your story enters the same flow.",
      optKeywords: "Only to people who ask about price or time",
      optKeywordsBody: "The other comments get no automatic reply.",
      optFirstDirect: "First Direct message",
      optFirstDirectBody: "Choose a fixed message or let AI write it from your business details.",
      replyOff: "No reply",
      replyFixed: "Fixed text",
      replyAi: "With AI",

      // -- toasts and states ------------------------------------------------------

      fullToast: "Done: the assistant books for you.",
      liteToast: "Done: it replies and you close.",
      offToast: "Assistant off.",
      saved: "Saved.",
      previewChanges: (n: number) => `${n} ${n === 1 ? "change ready" : "changes ready"}`,
      brokenShape: "Activation failed. Review the preview and try again.",

      loadFailed: "We could not load the automations.",
      retry: "Retry",
      activateAndTest: "Switch on and test",
      activateMode: (mode: string) => `Activate ${mode}`,
      testMode: "Test on Instagram",
      activationPreparing: "We are finishing the secure connection. Your settings are already saved.",
      confirmActivation: "Activate this mode and test it?",
      back: "Back",

      ...BOT_TEXTS_EN,
    },
    pt: {
      title: "Assistente",
      subtitle: "Escolha uma opção. Você pode ajustar os detalhes quando quiser.",
      fullTitle: "AI Booking · Agenda para você",
      fullTag: "Complemento com IA",
      fullBody: "Responde, oferece horários e deixa o agendamento na sua agenda.",
      fullF2: "Oferece seus horários e agenda sem precisar perguntar",
      fullF3: "Passa a conversa para você quando precisa de ajuda",
      liteTitle: "Comment Studio · Você continua",
      liteTag: "Incluído",
      liteBody: "Envia seus preços por Direct. Depois você continua.",
      liteF3: "Você continua a conversa",
      previewPublic: "Em público",
      previewDm: "Por Direct",
      previewExample: "A mensagem pública vai como está; o Direct usa seus preços e sua agenda.",
      previewFixed: "A mensagem pública e o primeiro Direct vão como estão.",
      grounding: (serviceCount: number, hours: string | null, quotePrices: boolean) => {
        const facts = [
          serviceCount && quotePrices
            ? `seus ${serviceCount === 1 ? "preços" : `${serviceCount} serviços mais procurados`}`
            : "",
          hours ? `seus horários ${hours}` : "",
        ].filter(Boolean);
        if (!facts.length) return "";
        const update = quotePrices
          ? " Altere um preço em Serviços e a mensagem será atualizada automaticamente."
          : "";
        return `Criado com ${facts.join(" e ")}.${update}`;
      },
      working: "Selecionado",
      selectedDraft: "Escolhido · ainda não ativado",
      pick: "Escolher este modo",
      completeFirst: "Preencha os dados primeiro",
      offLead: "Seu assistente está desligado e não responde. Toque em um modo para ligá-lo.",
      turnOff: "Desligar o assistente",
      tune: "Ajustar este modo",
      optPublic: "Responder também em público",
      optPublicBody: "Deixa a resposta abaixo do comentário, onde todos podem vê-la.",
      optStories: "Responder aos stories",
      optStoriesBody: "Quem responde ao seu story entra no mesmo fluxo.",
      optKeywords: "Só para quem pergunta preço ou horário",
      optKeywordsBody: "Os outros comentários ficam sem resposta automática.",
      optFirstDirect: "Primeira mensagem no Direct",
      optFirstDirectBody: "Escolha um texto fixo ou deixe a IA escrever com os dados do seu negócio.",
      replyOff: "Não responder",
      replyFixed: "Texto fixo",
      replyAi: "Com IA",
      fullToast: "Pronto: o assistente agenda para você.",
      liteToast: "Pronto: ele responde e você conclui.",
      offToast: "Assistente desligado.",
      saved: "Salvo.",
      previewChanges: (n: number) => `${n} ${n === 1 ? "alteração pronta" : "alterações prontas"}`,
      brokenShape: "Não foi possível ativar. Revise a prévia e tente novamente.",
      loadFailed: "Não foi possível carregar as automações.",
      retry: "Tentar novamente",
      activateAndTest: "Ativar e testar",
      activateMode: (mode: string) => `Ativar ${mode}`,
      testMode: "Testar no Instagram",
      activationPreparing: "Estamos concluindo a conexão segura. Seus ajustes já estão salvos.",
      confirmActivation: "Ativar este modo e testá-lo?",
      back: "Voltar",
      ...BOT_TEXTS_PT,
    },
  }),
);

// ---------------------------------------------------------------------------
// S1 — Conectar Instagram
// ---------------------------------------------------------------------------

export const CONECTAR = live(
  defineCopy("ig.conectar", {
    es: {
      /** [DIEGO] "Cuenta de Instagram" */
      title: "Cuenta de Instagram",
      hubSub: "Conexión con tu perfil",

      offTitle: "Cuenta del negocio",
      offBody:
        "Abriremos una ventana segura para autorizar tu cuenta de Instagram.",
      inviteBody:
        "Acepta el acceso y vuelve aquí para comprobar la conexión.",
      returnBody:
        "Termina la autorización de Instagram y vuelve para comprobarla.",
      connect: "Conectar Instagram",
      continue: "Continuar con Instagram",
      connecting: "Comprobando conexión...",
      check: "Ya lo conecté",
      checkHint: "Cuando termines, vuelve aquí y comprobaremos la cuenta.",
      notFound: "Todavía no vemos la conexión. Termina la autorización y vuelve a comprobar.",
      reopen: "Continuar autorización",

      /** [DIEGO] "WhatsApp Conectado" is his chip; this is the same chip, other channel. */
      onChip: "Conectado",
      onTitle: "Instagram conectado",
      onBody: "La cuenta está lista para configurar tus reservas.",

      refetch: "Actualizar publicaciones",
      refetching: "Actualizando...",
      refetched: "Publicaciones actualizadas.",

      brokenTitle: "Vuelve a conectar Instagram",
      brokenBody:
        "No pudimos acceder a la cuenta. Revisa los permisos e inténtalo de nuevo.",
      reconnect: "Volver a conectar",

      // The dead end. No button and no spinner, because there is nothing this
      // screen can do about it — `fuelyAutomation*` answers
      // BotNotMigratedToNewFuelySettings on this bot and always will until someone
      // migrates it upstream.
      legacyTitle: "Necesitamos actualizar esta cuenta",
      legacyBody:
        "Abre Chatfuel y pide actualizar este bot antes de continuar.",
      legacyAction: "Abrir Chatfuel",

      /** [OURS] the product-wide empty state: no account, nothing to show anywhere. */
      gateNote: "Conecta Instagram para continuar.",
    },
    en: {
      title: "Instagram account",
      hubSub: "Connection to your profile",

      offTitle: "Business account",
      offBody:
        "We will open a secure window to authorize your Instagram account.",
      inviteBody:
        "Accept access, then come back here to verify the connection.",
      returnBody:
        "Finish the Instagram authorization and come back to verify it.",
      connect: "Connect Instagram",
      continue: "Continue with Instagram",
      connecting: "Checking connection...",
      check: "I already connected it",
      checkHint: "When you finish, come back here and we will verify the account.",
      notFound: "We still do not see the connection. Finish the authorization and check again.",
      reopen: "Continue authorization",

      onChip: "Connected",
      onTitle: "Instagram connected",
      onBody: "The account is ready to set up your bookings.",

      refetch: "Refresh posts",
      refetching: "Refreshing...",
      refetched: "Posts updated.",

      brokenTitle: "Connect Instagram again",
      brokenBody:
        "We could not reach the account. Check the permissions and try again.",
      reconnect: "Connect again",

      legacyTitle: "We need to update this account",
      legacyBody:
        "Open Chatfuel and ask to update this bot before continuing.",
      legacyAction: "Open Chatfuel",

      gateNote: "Connect Instagram to continue.",
    },
    pt: {
      title: "Conta do Instagram",
      hubSub: "Conexão com o seu perfil",
      offTitle: "Conta comercial",
      offBody: "Abriremos uma janela segura para autorizar sua conta do Instagram.",
      inviteBody: "Aceite o acesso e volte aqui para verificarmos a conexão.",
      returnBody: "Conclua a autorização do Instagram e volte para verificarmos.",
      connect: "Conectar Instagram",
      continue: "Continuar com o Instagram",
      connecting: "Verificando conexão...",
      check: "Já conectei",
      checkHint: "Quando terminar, volte aqui e verificaremos a conta.",
      notFound: "Ainda não vemos a conexão. Conclua a autorização e verifique novamente.",
      reopen: "Continuar autorização",
      onChip: "Conectado",
      onTitle: "Instagram conectado",
      onBody: "A conta está pronta para configurar seus agendamentos.",
      refetch: "Atualizar publicações",
      refetching: "Atualizando...",
      refetched: "Publicações atualizadas.",
      brokenTitle: "Conecte o Instagram novamente",
      brokenBody: "Não foi possível acessar a conta. Confira as permissões e tente novamente.",
      reconnect: "Conectar novamente",
      legacyTitle: "Precisamos atualizar esta conta",
      legacyBody: "Abra o Chatfuel e peça para atualizar este bot antes de continuar.",
      legacyAction: "Abrir Chatfuel",
      gateNote: "Conecte o Instagram para continuar.",
    },
  }),
);

// ---------------------------------------------------------------------------
// S3 — Qué puede ofrecer
// ---------------------------------------------------------------------------

export const OFERTA = live(
  defineCopy("ig.oferta", {
    es: {
      title: "Qué puede ofrecer",
      hubSub: "Servicios, horarios y fotos",
      subtitle: "El bot solo puede ofrecer lo que marques aquí.",

      servicesTitle: "Servicios que puede ofrecer",
      servicesBody: "Lo que no esté marcado, no lo nombra: te lo pasa a ti.",
      servicesEmpty: "No hay servicios registrados.", // [DIEGO] Servicios.tsx
      servicesCount: (on: number, all: number) => `${on} de ${all} marcados`,
      selectAll: "Marcar todos",
      selectNone: "Desmarcar todos",

      whenTitle: "Cuándo responde el bot",
      whenBody: "Esto es cuándo responde el bot, no cuándo atiendes tú.",
      whenAlways: "Siempre",
      whenOutside: "Solo fuera del horario de atención",

      photosTitle: "Fotos del catálogo",
      photosBody: "Solo tus propias fotos. El bot no inventa ni reenvía fotos de otras.",
      photosNever: "Nunca",
      photosMentioned: "Cuando se menciona el servicio",
      photosAsked: "Solo si la clienta las pide",
      photosPerItem: "Fotos por servicio",

      depositTitle: "Seña o abono",
      depositBody: "El bot puede explicarla y pedirla, pero no la cobra ni la verifica. Eso lo haces tú.",
      depositPlaceholder: "Ej. Se pide 30% de abono por transferencia para reservar.",

      capturesTitle: "Qué datos te pide",
      capturesBody: "Lo que el bot le pregunta a la clienta y deja escrito en su ficha.",

      knowledgeTitle: "Lo que el bot sabe",
      knowledgeBody: "Estas respuestas salen de los datos que guardaste al preparar tu negocio.",
      knowledgeLoading: "Cargando respuestas…",
      knowledgeLoadFailed: "No pudimos cargar las respuestas.",
      knowledgeEmpty: "Todavía no hay preguntas guardadas.",
      question: "Pregunta",
      answer: "Respuesta",
      addQuestion: "Agregar pregunta",
      removeQuestion: "Eliminar",
      saveQuestions: "Guardar preguntas",
      knowledgeSaved: "Preguntas guardadas.",
      knowledgeSaveFailed: "No pudimos guardar las preguntas. Inténtalo de nuevo.",
      retry: "Reintentar",

      /** [PLAN] §3.6 verbatim. This sentence is the product's answer to objection (b). */
      designSwitch: "El bot nunca promete diseños. Si la clienta manda una foto, te la paso a ti.",
      designOffTitle: "¿Desactivar esta protección?",
      designOffBody:
        "Si la desactivas, el bot puede responder sobre diseños que no están en tu catálogo. Nadie revisa esa respuesta antes de que la clienta la lea.",
      designOffConfirm: "Sí, desactivar",

      saved: "Cambios guardados.",
      promptTitle: "Lo que el bot tiene permitido decir",
      promptBody: "Esto es exactamente lo que se guarda como instrucción del bot. Nada oculto.",
    },
    en: {
      title: "What it can offer",
      hubSub: "Services, hours and photos",
      subtitle: "The bot can only offer what you check here.",

      servicesTitle: "Services it can offer",
      servicesBody: "Whatever is not checked, it does not name: it passes it to you.",
      servicesEmpty: "There are no services registered.",
      servicesCount: (on: number, all: number) => `${on} of ${all} checked`,
      selectAll: "Check all",
      selectNone: "Uncheck all",

      whenTitle: "When the bot replies",
      whenBody: "This is when the bot replies, not when you work.",
      whenAlways: "Always",
      whenOutside: "Only outside your opening hours",

      photosTitle: "Catalogue photos",
      photosBody: "Only your own photos. The bot does not invent photos or forward other salons'.",
      photosNever: "Never",
      photosMentioned: "When the service is mentioned",
      photosAsked: "Only if the client asks for them",
      photosPerItem: "Photos per service",

      depositTitle: "Deposit",
      depositBody: "The bot can explain it and ask for it, but it does not charge it or check it. You do that.",
      depositPlaceholder: "E.g. A 30% deposit by transfer is required to book.",

      capturesTitle: "What it asks her for",
      capturesBody: "What the bot asks the client and writes down in her record.",

      knowledgeTitle: "What the bot knows",
      knowledgeBody: "These answers come from the details you saved while preparing your business.",
      knowledgeLoading: "Loading answers…",
      knowledgeLoadFailed: "We could not load the answers.",
      knowledgeEmpty: "There are no saved questions yet.",
      question: "Question",
      answer: "Answer",
      addQuestion: "Add question",
      removeQuestion: "Remove",
      saveQuestions: "Save questions",
      knowledgeSaved: "Questions saved.",
      knowledgeSaveFailed: "We could not save the questions. Try again.",
      retry: "Retry",

      designSwitch: "The bot never promises designs. If the client sends a photo, I pass it to you.",
      designOffTitle: "Turn off this protection?",
      designOffBody:
        "If you turn it off, the bot can answer about designs that are not in your catalogue. Nobody checks that answer before the client reads it.",
      designOffConfirm: "Yes, turn it off",

      saved: "Changes saved.",
      promptTitle: "What the bot is allowed to say",
      promptBody: "This is exactly what is saved as the bot's instruction. Nothing hidden.",
    },
    pt: {
      title: "O que pode oferecer",
      hubSub: "Serviços, horários e fotos",
      subtitle: "O assistente só pode oferecer o que você marcar aqui.",
      servicesTitle: "Serviços que pode oferecer",
      servicesBody: "O que não estiver marcado não será mencionado: a conversa será passada para você.",
      servicesEmpty: "Não há serviços cadastrados.",
      servicesCount: (on: number, all: number) => `${on} de ${all} marcados`,
      selectAll: "Marcar todos",
      selectNone: "Desmarcar todos",
      whenTitle: "Quando o assistente responde",
      whenBody: "Isto define quando o assistente responde, não o seu horário de atendimento.",
      whenAlways: "Sempre",
      whenOutside: "Somente fora do horário de atendimento",
      photosTitle: "Fotos do catálogo",
      photosBody: "Somente suas próprias fotos. O assistente não inventa nem encaminha fotos de outros negócios.",
      photosNever: "Nunca",
      photosMentioned: "Quando o serviço é mencionado",
      photosAsked: "Somente quando a cliente pedir",
      photosPerItem: "Fotos por serviço",
      depositTitle: "Sinal",
      depositBody: "O assistente pode explicar e pedir o sinal, mas não cobra nem verifica o pagamento. Isso fica com você.",
      depositPlaceholder: "Ex.: É preciso pagar 30% por transferência para reservar.",
      capturesTitle: "Quais dados solicita",
      capturesBody: "O que o assistente pergunta à cliente e registra na ficha.",
      knowledgeTitle: "O que o assistente sabe",
      knowledgeBody: "Estas respostas vêm dos dados salvos ao preparar seu negócio.",
      knowledgeLoading: "Carregando respostas…",
      knowledgeLoadFailed: "Não foi possível carregar as respostas.",
      knowledgeEmpty: "Ainda não há perguntas salvas.",
      question: "Pergunta",
      answer: "Resposta",
      addQuestion: "Adicionar pergunta",
      removeQuestion: "Excluir",
      saveQuestions: "Salvar perguntas",
      knowledgeSaved: "Perguntas salvas.",
      knowledgeSaveFailed: "Não foi possível salvar as perguntas. Tente novamente.",
      retry: "Tentar novamente",
      designSwitch: "O assistente nunca promete um design. Se a cliente enviar uma foto, passa a conversa para você.",
      designOffTitle: "Desativar esta proteção?",
      designOffBody: "Se você desativá-la, o assistente poderá responder sobre designs que não estão no seu catálogo. Ninguém revisa essa resposta antes da cliente ler.",
      designOffConfirm: "Sim, desativar",
      saved: "Alterações salvas.",
      promptTitle: "O que o assistente pode dizer",
      promptBody: "Isto é exatamente o que fica salvo como instrução do assistente. Nada fica oculto.",
    },
  }),
);

/** [OURS] The capture names Stage 1 reads, written the way the salon says them. */
export const CAPTURE_LABEL: Record<string, string> = live(
  defineCopy<Record<string, string>>("ig.captureLabel", {
    es: {
      telefono: "Teléfono",
      etiqueta: "Etiqueta",
      servicio_interes: "Qué servicio quiere",
      presupuesto: "Cuánto quiere gastar",
      fecha_preferida: "Qué día le acomoda",
      alergias: "Alergias",
      origen: "Cómo llegó",
      notas_bot: "Resumen de la conversación",
      nombre: "Nombre",
    },
    en: {
      telefono: "Phone",
      etiqueta: "Label",
      servicio_interes: "Which service she wants",
      presupuesto: "How much she wants to spend",
      fecha_preferida: "Which day suits her",
      alergias: "Allergies",
      origen: "How she found you",
      notas_bot: "Summary of the conversation",
      nombre: "Name",
    },
    pt: {
      telefono: "Telefone",
      etiqueta: "Etiqueta",
      servicio_interes: "Qual serviço procura",
      presupuesto: "Quanto pretende gastar",
      fecha_preferida: "Qual dia prefere",
      alergias: "Alergias",
      origen: "Como chegou até você",
      notas_bot: "Resumo da conversa",
      nombre: "Nome",
    },
  }),
);

// ---------------------------------------------------------------------------
// S5 — Bandeja
// ---------------------------------------------------------------------------

export const BANDEJA = live(
  defineCopy("ig.bandeja", {
    es: {
      title: "Bandeja",
      hubSub: "Conversaciones de Instagram",
      subtitle: "Tus conversaciones de Instagram, en vivo.",

      empty: "No hay conversaciones todavía.",
      emptyHint: "Cuando alguien te escriba por Direct o comente una publicación, aparece aquí.",
      pick: "Elige una conversación.",

      needsYou: "Te necesita",
      unread: (n: number) => (n === 1 ? "1 sin leer" : `${n} sin leer`),

      takeOver: "Tomar la conversación",
      handBack: "Devolver al bot",
      takenTitle: "La tienes tú. El bot no responde.",
      botTitle: "Responde el bot.",

      composerPlaceholder: "Escribe un mensaje...",
      /** [DIEGO] "Enviar Mensaje" */
      send: "Enviar Mensaje",
      sending: "Enviando...",

      senderBot: "Bot",
      senderYou: "Tú",
      senderThem: "Clienta",
      publicReply: "Respuesta pública",

      reload: "Actualizar",
      stopped: "Las actualizaciones en vivo se pausaron. Toca Actualizar.",
      /**
       * [OURS] Instagram cannot be asked for on its own: the API returns all your
       * channels mixed and we quedamos con las de Instagram. When the search stops
       * before finding a full screen, the salon is told how far it looked.
       */
      truncated: (n: number) =>
        `Revisamos las ${n} conversaciones más recientes de todos tus canales. Toca Actualizar para seguir buscando.`,
    },
    en: {
      title: "Inbox",
      hubSub: "Instagram conversations",
      subtitle: "Your Instagram conversations, live.",

      empty: "No conversations yet.",
      emptyHint: "When someone writes to you by Direct or comments on a post, it shows up here.",
      pick: "Pick a conversation.",

      needsYou: "Needs you",
      unread: (n: number) => (n === 1 ? "1 unread" : `${n} unread`),

      takeOver: "Take over the conversation",
      handBack: "Give it back to the bot",
      takenTitle: "You have it. The bot does not reply.",
      botTitle: "The bot replies.",

      composerPlaceholder: "Write a message...",
      send: "Send Message",
      sending: "Sending...",

      senderBot: "Bot",
      senderYou: "You",
      senderThem: "Client",
      publicReply: "Public reply",

      reload: "Refresh",
      stopped: "Live updates are paused. Tap Refresh.",
      truncated: (n: number) =>
        `We checked the ${n} most recent conversations across all your channels. Tap Refresh to keep looking.`,
    },
    pt: {
      title: "Caixa de entrada",
      hubSub: "Conversas do Instagram",
      subtitle: "Suas conversas do Instagram, ao vivo.",
      empty: "Ainda não há conversas.",
      emptyHint: "Quando alguém enviar uma mensagem no Direct ou comentar uma publicação, a conversa aparecerá aqui.",
      pick: "Escolha uma conversa.",
      needsYou: "Precisa de você",
      unread: (n: number) => n === 1 ? "1 não lida" : `${n} não lidas`,
      takeOver: "Assumir a conversa",
      handBack: "Devolver ao assistente",
      takenTitle: "A conversa está com você. O assistente não responde.",
      botTitle: "O assistente responde.",
      composerPlaceholder: "Escreva uma mensagem...",
      send: "Enviar mensagem",
      sending: "Enviando...",
      senderBot: "Assistente",
      senderYou: "Você",
      senderThem: "Cliente",
      publicReply: "Resposta pública",
      reload: "Atualizar",
      stopped: "As atualizações ao vivo foram pausadas. Toque em Atualizar.",
      truncated: (n: number) => `Verificamos as ${n} conversas mais recentes de todos os seus canais. Toque em Atualizar para continuar procurando.`,
    },
  }),
);

// ---------------------------------------------------------------------------
// Onboarding (screens/ig/onboarding.tsx) — moved here unchanged from the screen.
// ---------------------------------------------------------------------------

export const ONBOARDING_COPY = defineCopy("ig.onboarding", {
  es: {
    steps: {
      connect: "Instagram",
      review: "Revisa",
      activate: "Activar",
      test: "Prueba",
    },
    stepOf: (current: number, total: number) => `Paso ${current} de ${total}`,

    titleConnect: "Atiende desde tu Instagram",
    titleReview: "Tu agenda está casi lista",
    titleActivate: "Elige cómo atender",
    titleTest: "Pruébalo en Instagram",
    subtitleConnect:
      "Tus servicios y precios, listos para responder a tus clientes.",
    subtitleReview:
      "Primero revisa tus servicios. Después completa solo lo que falta.",
    subtitleActivate:
      "Dos opciones listas. Elige una y ajusta solo si quieres.",
    subtitleTestFull: (phrase: string) =>
      `Comenta “${phrase}” y completa una reserva desde Direct.`,
    subtitleTestLite: (phrase: string) =>
      `Comenta “${phrase}” y comprueba la respuesta en Direct.`,
    testKeyword: "precio demo",

    connectLater:
      "Puedes seguir con tu calendario y conectar Instagram después.",
    setUpAgenda: "Continuar sin Instagram",
    sourceInstagram: "Desde mi Instagram",
    sourceInstagramHint:
      "Traemos tu nombre, foto, bio, trabajos y precios publicados.",
    sourcePaste: "Pegar mi lista",
    sourcePasteHint:
      "Pega el texto que ya envías por WhatsApp o tienes en Notas.",
    sourcePresets: "Elegir servicios típicos",
    sourcePresetsHint:
      "Empieza con servicios, duraciones y precios típicos de salones como el tuyo.",
    rubroLabels: {
      uñas: "Uñas",
      pies: "Pies",
      pestañas: "Pestañas",
      cejas: "Cejas",
      faciales: "Faciales",
      cabello: "Cabello",
      masajes: "Masajes",
      micropigmentación: "Micropigmentación",
    },
    recommended: "Recomendado",
    pasteTitle: "Pega tu lista de precios",
    pastePlaceholder:
      "Ejemplo:\nEsmaltado semipermanente — $15.000 — 60 min\nPedicure — $22.200 — 90 min",
    readList: "Revisar mi lista",
    backToMethods: "Elegir otra opción",

    accountLabel: "Instagram conectado",
    connected: "Instagram conectado",
    ready: "Listo",
    mediaLabel: "Trabajos recientes de Instagram",
    recentWork: "Trabajo reciente",
    profileBio: "Bio de Instagram",
    profileWebsite: "Sitio web",
    foundTitle: "Encontramos en tu Instagram",
    foundHint: "Tú decides qué usar. No cambiaremos tus datos sin permiso.",
    foundUse: "Usar",
    foundIgnore: "Ignorar",
    foundFields: {
      name: "Nombre",
      phone: "Teléfono",
      address: "Dirección",
    },
    readiness: {
      paginaLista: "Agenda lista",
      instagramConectado: "Instagram conectado",
      automatizacionActiva: "Automatización activa",
      pruebaSuperada: "Prueba superada",
    },

    businessTitle: "Tu negocio",
    close: "Cerrar",
    edit: "Editar",
    businessNameField: "Nombre del negocio",
    phoneField: "Teléfono",
    addressField: "Dirección",
    saving: "Guardando…",
    saveDetails: "Guardar datos",
    profileSaved: "Datos guardados.",
    profileSaveFailed: "No pudimos guardar los cambios. Inténtalo de nuevo.",
    services: "Servicios",
    servicesEmpty: "Agrega lo que pueden reservar",
    preparingServices: "Estamos preparando tus servicios…",
    retryAutomaticSetup: "Cargar servicios sugeridos",
    addService: "Agregar servicio",

    presetTitle: "Lo que ofreces",
    presetPriced:
      "Precios típicos en Chile. Revísalos: el asistente los dirá tal cual.",
    presetUnpriced: "Elige lo que ofreces y pon tus precios.",
    adding: "Agregando…",
    addServices: (n: number) =>
      n === 1 ? "Agregar 1 servicio" : `Agregar ${n} servicios`,
    presetsAdded: (n: number) =>
      n === 1
        ? "1 servicio agregado. Revisa el precio."
        : `${n} servicios agregados. Revisa los precios.`,
    presetsFailed: "No pudimos agregar los servicios. Inténtalo de nuevo.",
    finishServices: "Terminar de conectar servicios",

    team: "Equipo",
    teamEmpty: "Agrega a quienes atienden",
    addSpecialist: "Agregar profesional",

    scheduleTitle: "Horario",
    scheduleReady: "La agenda usa el horario de cada profesional",
    scheduleMissing: "Abre un profesional y define cuándo recibe citas",
    calendarReadyTitle: "Tu agenda ya funciona",
    calendarReadyHint:
      "Puedes abrirla ahora. Tu progreso quedará guardado para continuar después.",
    previewCalendar: "Ver mi agenda",

    priceListTitle: "¿Tienes una lista de precios?",
    priceListHint:
      "Sube CSV, TSV o TXT. Revisa los servicios antes de agregarlos.",
    instagramPricesTitle: "Precios encontrados en tu Instagram",
    instagramPricesHint: "Revisa lo que entendimos antes de agregarlo.",
    uploadFile: "Subir archivo",
    priceListUnreadable:
      "No pudimos leer la lista. Agrega los servicios manualmente.",
    showingOf: (total: number) => `Mostrando 8 de ${total} servicios.`,
    rowsSkipped: (n: number) =>
      n === 1 ? "1 fila omitida." : `${n} filas omitidas.`,
    importedCount: (n: number) =>
      n === 1 ? "1 servicio agregado." : `${n} servicios agregados.`,
    importedNone: "Todos esos servicios ya estaban en tu catálogo.",
    importFailed:
      "No pudimos agregar los servicios. Revisa la lista e inténtalo de nuevo.",

    allSet: "Todo listo",
    needBusiness: "Guarda el negocio",
    needContact: "Agrega teléfono y dirección",
    needService: "Agrega un servicio",
    needSpecialist: "Agrega un profesional",
    needSchedule: "Define su horario",
    continueLabel: "Continuar",

    commentStep: (phrase: string) => `Comenta “${phrase}”`,
    commentOnPost: (handle: string) =>
      `Hazlo en una publicación de @${handle}.`,
    open: "Abrir",
    checkDirect: "Revisa el Direct",
    directFull: "El asistente seguirá hasta completar la reserva.",
    directLite: "Comprueba la respuesta en Direct y continúa la conversación.",
    openChat: "Abrir chat",
    finishBooking: "Completa la reserva",
    bookingAppears: "La cita aparecerá en AgendaConmigo.",
    bookingReceived: "Recibida",
    bookingWaiting: "Esperando",
    commentSeen:
      "Vimos tu comentario de prueba. Continúa la conversación por Direct.",
    scanTruncated: "No pudimos revisar toda la actividad. Vuelve a comprobar.",
    busyRetry: "Hay mucha actividad. Vuelve a comprobar.",
    commentNotSeen:
      "Aún no vemos tu comentario. Publícalo y vuelve a comprobar.",
    checkFailed: "No pudimos comprobar la prueba. Inténtalo de nuevo.",
    finishLater: "Terminar después",
    viewBooking: "Ver cita",
    goToDashboard: "Ir al panel",
    checking: "Comprobando…",
    check: "Comprobar",
  },
  en: {
    steps: {
      connect: "Instagram",
      review: "Review",
      activate: "Activate",
      test: "Test",
    },
    stepOf: (current: number, total: number) => `Step ${current} of ${total}`,

    titleConnect: "Look after clients on Instagram",
    titleReview: "Your calendar is almost ready",
    titleActivate: "Choose how to reply",
    titleTest: "Try it on Instagram",
    subtitleConnect:
      "Your services and prices, ready for your clients' questions.",
    subtitleReview:
      "Check your services first. Then fill in only what is missing.",
    subtitleActivate:
      "Two options ready. Pick one and adjust only if you want.",
    subtitleTestFull: (phrase: string) =>
      `Comment “${phrase}” and complete a booking from Direct.`,
    subtitleTestLite: (phrase: string) =>
      `Comment “${phrase}” and check the reply in Direct.`,
    testKeyword: "price demo",

    connectLater:
      "Keep using your calendar and connect Instagram later.",
    setUpAgenda: "Continue without Instagram",
    sourceInstagram: "From my Instagram",
    sourceInstagramHint:
      "We bring in your name, photo, bio, work and published prices.",
    sourcePaste: "Paste my price list",
    sourcePasteHint:
      "Paste the text you already send on WhatsApp or keep in Notes.",
    sourcePresets: "Choose typical services",
    sourcePresetsHint:
      "Start with typical services, durations and prices from salons like yours.",
    rubroLabels: {
      uñas: "Nails",
      pies: "Pedicure",
      pestañas: "Lashes",
      cejas: "Brows",
      faciales: "Facials",
      cabello: "Hair",
      masajes: "Massage",
      micropigmentación: "Permanent makeup",
    },
    recommended: "Recommended",
    pasteTitle: "Paste your price list",
    pastePlaceholder:
      "Example:\nGel manicure — $15,000 — 60 min\nPedicure — $22,200 — 90 min",
    readList: "Review my list",
    backToMethods: "Choose another option",

    accountLabel: "Instagram connected",
    connected: "Instagram connected",
    ready: "Ready",
    mediaLabel: "Recent work from Instagram",
    recentWork: "Recent work",
    profileBio: "Instagram bio",
    profileWebsite: "Website",
    foundTitle: "Found on your Instagram",
    foundHint: "You decide what to use. We will not change your details without permission.",
    foundUse: "Use",
    foundIgnore: "Ignore",
    foundFields: {
      name: "Name",
      phone: "Phone",
      address: "Address",
    },
    readiness: {
      paginaLista: "Calendar ready",
      instagramConectado: "Instagram connected",
      automatizacionActiva: "Automation active",
      pruebaSuperada: "Test passed",
    },

    businessTitle: "Your business",
    close: "Close",
    edit: "Edit",
    businessNameField: "Business name",
    phoneField: "Phone",
    addressField: "Address",
    saving: "Saving…",
    saveDetails: "Save details",
    profileSaved: "Details saved.",
    profileSaveFailed: "We could not save your changes. Try again.",
    services: "Services",
    servicesEmpty: "Add what clients can book",
    preparingServices: "We are preparing your services…",
    retryAutomaticSetup: "Load suggested services",
    addService: "Add service",

    presetTitle: "What you offer",
    presetPriced:
      "Typical prices in Chile. Check them: the assistant will say them exactly as they are.",
    presetUnpriced: "Pick what you offer and set your prices.",
    adding: "Adding…",
    addServices: (n: number) =>
      n === 1 ? "Add 1 service" : `Add ${n} services`,
    presetsAdded: (n: number) =>
      n === 1
        ? "1 service added. Check the prices."
        : `${n} services added. Check the prices.`,
    presetsFailed: "We could not add the services. Try again.",
    finishServices: "Finish connecting services",

    team: "Team",
    teamEmpty: "Add the people who serve clients",
    addSpecialist: "Add professional",

    scheduleTitle: "Schedule",
    scheduleReady: "The calendar uses each professional's schedule",
    scheduleMissing: "Open a professional and set when they take appointments",
    calendarReadyTitle: "Your calendar is ready",
    calendarReadyHint:
      "You can open it now. Your progress will be saved so you can continue later.",
    previewCalendar: "View my calendar",

    priceListTitle: "Do you have a price list?",
    priceListHint:
      "Upload CSV, TSV or TXT. Review the services before adding them.",
    instagramPricesTitle: "Prices found on your Instagram",
    instagramPricesHint: "Review what we understood before adding it.",
    uploadFile: "Upload file",
    priceListUnreadable:
      "We could not read the list. Add the services manually.",
    showingOf: (total: number) => `Showing 8 of ${total} services.`,
    rowsSkipped: (n: number) =>
      n === 1 ? "1 row skipped." : `${n} rows skipped.`,
    importedCount: (n: number) =>
      n === 1 ? "1 service added." : `${n} services added.`,
    importedNone: "All those services were already in your catalog.",
    importFailed:
      "We could not add the services. Check the list and try again.",

    allSet: "All set",
    needBusiness: "Save your business",
    needContact: "Add phone and address",
    needService: "Add a service",
    needSpecialist: "Add a professional",
    needSchedule: "Set their schedule",
    continueLabel: "Continue",

    commentStep: (phrase: string) => `Comment “${phrase}”`,
    commentOnPost: (handle: string) => `Do it on a post from @${handle}.`,
    open: "Open",
    checkDirect: "Check Direct",
    directFull: "The assistant will keep going until the booking is complete.",
    directLite: "Check the reply in Direct and continue the conversation.",
    openChat: "Open chat",
    finishBooking: "Complete the booking",
    bookingAppears: "The appointment will appear in AgendaConmigo.",
    bookingReceived: "Received",
    bookingWaiting: "Waiting",
    commentSeen:
      "We saw your test comment. Continue the conversation in Direct.",
    scanTruncated: "We could not check all the activity. Check again.",
    busyRetry: "There is a lot of activity. Check again.",
    commentNotSeen: "We do not see your comment yet. Post it and check again.",
    checkFailed: "We could not check the test. Try again.",
    finishLater: "Finish later",
    viewBooking: "View appointment",
    goToDashboard: "Go to dashboard",
    checking: "Checking…",
    check: "Check",
  },
  pt: {
    steps: { connect: "Instagram", review: "Revisão", activate: "Ativar", test: "Teste" },
    stepOf: (current: number, total: number) => `Etapa ${current} de ${total}`,
    titleConnect: "Atenda pelo Instagram",
    titleReview: "Sua agenda está quase pronta",
    titleActivate: "Escolha como atender",
    titleTest: "Teste no Instagram",
    subtitleConnect: "Seus serviços e preços prontos para responder às clientes.",
    subtitleReview: "Primeiro confira seus serviços. Depois, preencha apenas o que faltar.",
    subtitleActivate: "Duas opções prontas. Escolha uma e ajuste só se quiser.",
    subtitleTestFull: (phrase: string) => `Comente “${phrase}” e conclua um agendamento pelo Direct.`,
    subtitleTestLite: (phrase: string) => `Comente “${phrase}” e confira a resposta no Direct.`,
    testKeyword: "preço teste",
    connectLater: "Você pode continuar usando a agenda e conectar o Instagram depois.",
    setUpAgenda: "Continuar sem o Instagram",
    sourceInstagram: "Do meu Instagram",
    sourceInstagramHint: "Trazemos seu nome, foto, bio, trabalhos e preços publicados.",
    sourcePaste: "Colar minha lista",
    sourcePasteHint: "Cole o texto que você já envia pelo WhatsApp ou guarda nas Notas.",
    sourcePresets: "Escolher serviços comuns",
    sourcePresetsHint: "Comece com serviços, durações e preços comuns em negócios como o seu.",
    rubroLabels: {
      uñas: "Unhas", pies: "Pés", pestañas: "Cílios", cejas: "Sobrancelhas",
      faciales: "Estética facial", cabello: "Cabelo", masajes: "Massagem",
      micropigmentación: "Micropigmentação",
    },
    recommended: "Recomendado",
    pasteTitle: "Cole sua lista de preços",
    pastePlaceholder: "Exemplo:\nAlongamento em gel — R$ 120 — 90 min\nPedicure — R$ 60 — 60 min",
    readList: "Revisar minha lista",
    backToMethods: "Escolher outra opção",
    accountLabel: "Instagram conectado",
    connected: "Instagram conectado",
    ready: "Pronto",
    mediaLabel: "Trabalhos recentes do Instagram",
    recentWork: "Trabalho recente",
    profileBio: "Bio do Instagram",
    profileWebsite: "Site",
    foundTitle: "Encontramos no seu Instagram",
    foundHint: "Você decide o que usar. Não alteraremos seus dados sem sua permissão.",
    foundUse: "Usar",
    foundIgnore: "Ignorar",
    foundFields: { name: "Nome", phone: "Telefone", address: "Endereço" },
    readiness: {
      paginaLista: "Agenda pronta",
      instagramConectado: "Instagram conectado",
      automatizacionActiva: "Automação ativa",
      pruebaSuperada: "Teste concluído",
    },
    businessTitle: "Seu negócio",
    close: "Fechar",
    edit: "Editar",
    businessNameField: "Nome do negócio",
    phoneField: "Telefone",
    addressField: "Endereço",
    saving: "Salvando…",
    saveDetails: "Salvar dados",
    profileSaved: "Dados salvos.",
    profileSaveFailed: "Não foi possível salvar as alterações. Tente novamente.",
    services: "Serviços",
    servicesEmpty: "Adicione o que as clientes podem agendar",
    preparingServices: "Estamos preparando seus serviços…",
    retryAutomaticSetup: "Carregar serviços sugeridos",
    addService: "Adicionar serviço",
    presetTitle: "O que você oferece",
    presetPriced: "Preços comuns no Brasil. Confira-os: o assistente informará exatamente esses valores.",
    presetUnpriced: "Escolha o que você oferece e informe seus preços.",
    adding: "Adicionando…",
    addServices: (n: number) => n === 1 ? "Adicionar 1 serviço" : `Adicionar ${n} serviços`,
    presetsAdded: (n: number) => n === 1
      ? "1 serviço adicionado. Confira o preço."
      : `${n} serviços adicionados. Confira os preços.`,
    presetsFailed: "Não foi possível adicionar os serviços. Tente novamente.",
    finishServices: "Concluir a vinculação dos serviços",
    team: "Equipe",
    teamEmpty: "Adicione quem atende as clientes",
    addSpecialist: "Adicionar profissional",
    scheduleTitle: "Horários",
    scheduleReady: "A agenda usa os horários de cada profissional",
    scheduleMissing: "Abra um profissional e defina quando ele recebe agendamentos",
    calendarReadyTitle: "Sua agenda já funciona",
    calendarReadyHint: "Você pode abri-la agora. Seu progresso ficará salvo para continuar depois.",
    previewCalendar: "Ver minha agenda",
    priceListTitle: "Você tem uma lista de preços?",
    priceListHint: "Envie um CSV, TSV ou TXT. Revise os serviços antes de adicioná-los.",
    instagramPricesTitle: "Preços encontrados no seu Instagram",
    instagramPricesHint: "Confira o que entendemos antes de adicionar.",
    uploadFile: "Enviar arquivo",
    priceListUnreadable: "Não foi possível ler a lista. Adicione os serviços manualmente.",
    showingOf: (total: number) => `Mostrando 8 de ${total} serviços.`,
    rowsSkipped: (n: number) => n === 1 ? "1 linha ignorada." : `${n} linhas ignoradas.`,
    importedCount: (n: number) => n === 1 ? "1 serviço adicionado." : `${n} serviços adicionados.`,
    importedNone: "Todos esses serviços já estavam no seu catálogo.",
    importFailed: "Não foi possível adicionar os serviços. Confira a lista e tente novamente.",
    allSet: "Tudo pronto",
    needBusiness: "Salve o negócio",
    needContact: "Adicione telefone e endereço",
    needService: "Adicione um serviço",
    needSpecialist: "Adicione um profissional",
    needSchedule: "Defina os horários",
    continueLabel: "Continuar",
    commentStep: (phrase: string) => `Comente “${phrase}”`,
    commentOnPost: (handle: string) => `Faça isso em uma publicação de @${handle}.`,
    open: "Abrir",
    checkDirect: "Confira o Direct",
    directFull: "O assistente continuará até concluir o agendamento.",
    directLite: "Confira a resposta no Direct e continue a conversa.",
    openChat: "Abrir conversa",
    finishBooking: "Conclua o agendamento",
    bookingAppears: "O agendamento aparecerá no AgendaConmigo.",
    bookingReceived: "Recebido",
    bookingWaiting: "Aguardando",
    commentSeen: "Vimos seu comentário de teste. Continue a conversa pelo Direct.",
    scanTruncated: "Não foi possível verificar toda a atividade. Verifique novamente.",
    busyRetry: "Há muita atividade. Verifique novamente.",
    commentNotSeen: "Ainda não vemos seu comentário. Publique-o e verifique novamente.",
    checkFailed: "Não foi possível verificar o teste. Tente novamente.",
    finishLater: "Concluir depois",
    viewBooking: "Ver agendamento",
    goToDashboard: "Ir para o painel",
    checking: "Verificando…",
    check: "Verificar",
  },
});
