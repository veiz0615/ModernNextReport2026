// src/types/report.ts

export interface ReportSectionProps {
  id: string;
}

/**
 * ニュースアイテムの基本構造
 * @property id - 一意識別子（将来的な拡張性を考慮し string で定義）
 * @property title - ニュースのタイトル
 * @property category - ニュースの分類（'Core' | 'Library' | 'Architecture' のいずれか）
 * @property date - 公開日 (YYYY-MM-DD 形式)
 */
export interface NewsItem {
  id: string;
  title: string;
  category: 'Core' | 'Library' | 'Architecture';
  date: string;
}