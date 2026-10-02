import type { Locale } from "./config";

/** Small dictionary for client-side screens (error, not found, loading) that cannot load the full messages. */
export const statusMessages: Record<
  Locale,
  {
    notFoundTitle: string;
    notFoundBody: string;
    home: string;
    errorTitle: string;
    errorBody: string;
    retry: string;
    loading: string;
  }
> = {
  en: {
    notFoundTitle: "This page does not exist.",
    notFoundBody: "The link may be out of date, or the address may contain a typo.",
    home: "Go to the homepage",
    errorTitle: "Something went wrong.",
    errorBody: "This page could not be displayed. Please try again.",
    retry: "Try again",
    loading: "Loading…",
  },
  tr: {
    notFoundTitle: "Bu sayfa mevcut değil.",
    notFoundBody: "Bağlantı eskimiş olabilir ya da adreste bir yazım hatası olabilir.",
    home: "Ana sayfaya dön",
    errorTitle: "Bir şeyler ters gitti.",
    errorBody: "Bu sayfa görüntülenemedi. Lütfen tekrar deneyin.",
    retry: "Tekrar dene",
    loading: "Yükleniyor…",
  },
  de: {
    notFoundTitle: "Diese Seite existiert nicht.",
    notFoundBody: "Der Link ist vielleicht veraltet, oder die Adresse enthält einen Tippfehler.",
    home: "Zur Startseite",
    errorTitle: "Etwas ist schiefgelaufen.",
    errorBody: "Diese Seite konnte nicht angezeigt werden. Bitte versuchen Sie es erneut.",
    retry: "Erneut versuchen",
    loading: "Wird geladen …",
  },
  fr: {
    notFoundTitle: "Cette page n’existe pas.",
    notFoundBody: "Le lien est peut-être obsolète, ou l’adresse contient une faute de frappe.",
    home: "Retour à l’accueil",
    errorTitle: "Un problème est survenu.",
    errorBody: "Cette page n’a pas pu s’afficher. Veuillez réessayer.",
    retry: "Réessayer",
    loading: "Chargement…",
  },
  es: {
    notFoundTitle: "Esta página no existe.",
    notFoundBody: "Puede que el enlace esté desactualizado o que la dirección tenga un error.",
    home: "Ir a la página de inicio",
    errorTitle: "Algo salió mal.",
    errorBody: "No se pudo mostrar esta página. Inténtalo de nuevo.",
    retry: "Intentar de nuevo",
    loading: "Cargando…",
  },
  pt: {
    notFoundTitle: "Esta página não existe.",
    notFoundBody: "O link pode estar desatualizado ou o endereço pode ter um erro de digitação.",
    home: "Ir para a página inicial",
    errorTitle: "Algo deu errado.",
    errorBody: "Não foi possível exibir esta página. Tente novamente.",
    retry: "Tentar novamente",
    loading: "Carregando…",
  },
  it: {
    notFoundTitle: "Questa pagina non esiste.",
    notFoundBody: "Il link potrebbe essere obsoleto o l’indirizzo potrebbe contenere un errore di battitura.",
    home: "Vai alla home page",
    errorTitle: "Qualcosa è andato storto.",
    errorBody: "Non è stato possibile visualizzare questa pagina. Riprova.",
    retry: "Riprova",
    loading: "Caricamento…",
  },
  ar: {
    notFoundTitle: "هذه الصفحة غير موجودة.",
    notFoundBody: "ربما يكون الرابط قديمًا، أو يحتوي العنوان على خطأ إملائي.",
    home: "الانتقال إلى الصفحة الرئيسية",
    errorTitle: "حدث خطأ ما.",
    errorBody: "تعذّر عرض هذه الصفحة. يُرجى المحاولة مرة أخرى.",
    retry: "إعادة المحاولة",
    loading: "جارٍ التحميل…",
  },
  ja: {
    notFoundTitle: "このページは存在しません。",
    notFoundBody: "リンクが古いか、アドレスに誤りがある可能性があります。",
    home: "ホームページへ戻る",
    errorTitle: "問題が発生しました。",
    errorBody: "このページを表示できませんでした。もう一度お試しください。",
    retry: "再試行",
    loading: "読み込み中…",
  },
  ko: {
    notFoundTitle: "존재하지 않는 페이지입니다.",
    notFoundBody: "링크가 오래되었거나 주소에 오타가 있을 수 있습니다.",
    home: "홈페이지로 이동",
    errorTitle: "문제가 발생했습니다.",
    errorBody: "이 페이지를 표시할 수 없습니다. 다시 시도해 주세요.",
    retry: "다시 시도",
    loading: "불러오는 중…",
  },
};
