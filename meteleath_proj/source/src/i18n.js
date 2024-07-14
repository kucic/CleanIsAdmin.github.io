import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    menu_title: {
                        users: "User",
                        productInfo:"Product",
                        companyInfo:"Company",
                        cs: "customer services"
                    },
                    home: {
                        vision: {
                            title1: "Check your health\neasily at your Fingertips",
                            title2: "Uncover Your Health Secrets at Your Fingertips"
                        },
                        company: {
                            title1: "Hello, this is METEALTH",
                            title2: "METEALTH analyzes your genes and manages your health through your Fingertips",
                            act1: "Genetic testing using Fingertips samples",
                            act2: "Personalized health care as easy as a game",
                            act3: "gDNA extraction and NGS data analysis from Fingertips samples",
                            act4: "Wellness service provided in the comfort of a cafe",
                        },
                        product: {
                            title1:"White 헬릭스: All you need is your Fingertips",
                            title2:"Discover simple, painless, eco-friendly genetic testing"
                        },
                        suggest: {
                            title: "Learn about\nMETEALTH and the White 헬릭스",
                            btn: "Lean"
                        },
                        common: {
                            news: "Latest news",
                        }
                    }
                }
            },
            ko: {
                translation: {
                    menu_title: {
                        users: "사용자",
                        productInfo: "제품",
                        companyInfo:"회사",
                        cs: "고객지원"
                    },
                    home: {
                        vision: {
                            title1: "손끝에서 간편하게\n건강을 확인하세요",
                            title2: "Uncover Your Health Secrets at Your Fingertips"
                        },
                        company: {
                            title1: "안녕하세요 메텔스입니다",
                            title2: "메텔스는 손톱을 통해 유전자를 분석하고 건강을 관리합니다",
                            act1: "손톱 검체를 활용한 유전자 검사",
                            act2: "게임처럼 쉬운 개인 맞춤형 건강관리",
                            act3: "손톱 검체를 통한 gDNA 추출 및 NGS 데이터 분석",
                            act4: "카페처럼 편안하게 제공되는 웰니스 서비스",
                        },
                        product: {
                            title1:"화이트 헬릭스: 손톱만 있으면 가능합니다",
                            title2:"간편하고 통증없는 친환경 유전자 검사를 만나보세요"
                        },
                        suggest: {
                            title: "메텔스와 화이트 헬릭스에\n대해 알아보세요",
                            btn: "알아보기"
                        },
                        common: {
                            news: "최신 소식",
                        }
                    },
                    footer: {
                        company_name: "주식회사 메텔스",
                        address: "서울특별시 강남구 테헤란로 416,\n13-14층 (대치동, 연봉빌딩)",
                        ceo_name: "대표이사 아무개",
                        id: "사업자등록번호 290-xx-xxxxx",
                        call: "서비스 문의 전화 070-xx-xxxxx",
                        email: "이메일 support@metealth.io",
                        term: "웹사이트 이용약관",
                        per : "개인정보 처리방침",
                        ser: "서비스 이용약관"
                    }
                }
            }
        }
    })