/**
 * Sticker library for the Heirloom OCR demo
 * 70 stickers across 8 categories — mirrors the in-app sticker set
 */

export interface Sticker {
  id: string;
  label: string;
  imagePath: string;
  fallbackEmoji: string;
}

export const DEMO_STICKERS: Sticker[] = [
  // Annotations
  { id: "annotation_best",        label: "Best!",         imagePath: "/assets/stickers/annotations/sticker_annotation_best.png",        fallbackEmoji: "⭐" },
  { id: "annotation_double",      label: "Double",        imagePath: "/assets/stickers/annotations/sticker_annotation_double.png",      fallbackEmoji: "✌️" },
  { id: "annotation_garlic",      label: "More Garlic",   imagePath: "/assets/stickers/annotations/sticker_annotation_garlic.png",      fallbackEmoji: "🧄" },
  { id: "annotation_italy",       label: "Italy",         imagePath: "/assets/stickers/annotations/sticker_annotation_italy.png",       fallbackEmoji: "🇮🇹" },
  { id: "annotation_moms",        label: "Mom's",         imagePath: "/assets/stickers/annotations/sticker_annotation_moms.png",        fallbackEmoji: "💝" },
  { id: "annotation_try",         label: "Try This",      imagePath: "/assets/stickers/annotations/sticker_annotation_try.png",         fallbackEmoji: "👇" },

  // Badges
  { id: "badge_award",            label: "Award",         imagePath: "/assets/stickers/badges/sticker_badge_award.png",            fallbackEmoji: "🏆" },
  { id: "badge_familyrecipe",     label: "Family Recipe", imagePath: "/assets/stickers/badges/sticker_badge_familyrecipe.png",     fallbackEmoji: "👨‍👩‍👧" },
  { id: "badge_fivestars",        label: "5 Stars",       imagePath: "/assets/stickers/badges/sticker_badge_fivestars.png",        fallbackEmoji: "⭐⭐⭐⭐⭐" },
  { id: "badge_glutenfree",       label: "Gluten Free",   imagePath: "/assets/stickers/badges/sticker_badge_glutenfree.png",       fallbackEmoji: "🌾" },
  { id: "badge_grandma",          label: "Grandma's",     imagePath: "/assets/stickers/badges/sticker_badge_grandma.png",          fallbackEmoji: "👵" },
  { id: "badge_holiday",          label: "Holiday",       imagePath: "/assets/stickers/badges/sticker_badge_holiday.png",          fallbackEmoji: "🎄" },
  { id: "badge_homemade",         label: "Homemade",      imagePath: "/assets/stickers/badges/sticker_badge_homemade.png",         fallbackEmoji: "🏠" },
  { id: "badge_love",             label: "Made with Love",imagePath: "/assets/stickers/badges/sticker_badge_love.png",             fallbackEmoji: "❤️" },
  { id: "badge_quick",            label: "Quick",         imagePath: "/assets/stickers/badges/sticker_badge_quick.png",            fallbackEmoji: "⚡" },
  { id: "badge_sunday",           label: "Sunday Best",   imagePath: "/assets/stickers/badges/sticker_badge_sunday.png",           fallbackEmoji: "☀️" },
  { id: "badge_tested",           label: "Tested",        imagePath: "/assets/stickers/badges/sticker_badge_tested.png",           fallbackEmoji: "✅" },
  { id: "badge_vegetarian",       label: "Vegetarian",    imagePath: "/assets/stickers/badges/sticker_badge_vegetarian.png",       fallbackEmoji: "🥦" },

  // Decorative
  { id: "decorative_banner",      label: "Banner",        imagePath: "/assets/stickers/decorative/sticker_decorative_banner.png",   fallbackEmoji: "🎀" },
  { id: "decorative_border",      label: "Border",        imagePath: "/assets/stickers/decorative/sticker_decorative_border.png",   fallbackEmoji: "🖼️" },
  { id: "decorative_divider",     label: "Divider",       imagePath: "/assets/stickers/decorative/sticker_decorative_divider.png",  fallbackEmoji: "〰️" },
  { id: "decorative_flourish",    label: "Flourish",      imagePath: "/assets/stickers/decorative/sticker_decorative_flourish.png", fallbackEmoji: "✨" },
  { id: "decorative_laurel",      label: "Laurel",        imagePath: "/assets/stickers/decorative/sticker_decorative_laurel.png",   fallbackEmoji: "🌿" },

  // Emotions
  { id: "emotion_coffeestain",    label: "Coffee Stain",  imagePath: "/assets/stickers/emotions/sticker_emotion_coffeestain.png",   fallbackEmoji: "☕" },
  { id: "emotion_fingerprint",    label: "Fingerprint",   imagePath: "/assets/stickers/emotions/sticker_emotion_fingerprint.png",   fallbackEmoji: "👆" },
  { id: "emotion_heart",          label: "Heart",         imagePath: "/assets/stickers/emotions/sticker_emotion_heart.png",         fallbackEmoji: "❤️" },
  { id: "emotion_kiss",           label: "Kiss",          imagePath: "/assets/stickers/emotions/sticker_emotion_kiss.png",          fallbackEmoji: "💋" },
  { id: "emotion_smile",          label: "Smile",         imagePath: "/assets/stickers/emotions/sticker_emotion_smile.png",         fallbackEmoji: "😊" },
  { id: "emotion_star",           label: "Star",          imagePath: "/assets/stickers/emotions/sticker_emotion_star.png",          fallbackEmoji: "⭐" },

  // Food
  { id: "food_bread",             label: "Bread",         imagePath: "/assets/stickers/food/sticker_food_bread.png",        fallbackEmoji: "🍞" },
  { id: "food_butter",            label: "Butter",        imagePath: "/assets/stickers/food/sticker_food_butter.png",       fallbackEmoji: "🧈" },
  { id: "food_carrot",            label: "Carrot",        imagePath: "/assets/stickers/food/sticker_food_carrot.png",       fallbackEmoji: "🥕" },
  { id: "food_cheese",            label: "Cheese",        imagePath: "/assets/stickers/food/sticker_food_cheese.png",       fallbackEmoji: "🧀" },
  { id: "food_chocolate",         label: "Chocolate",     imagePath: "/assets/stickers/food/sticker_food_chocolate.png",    fallbackEmoji: "🍫" },
  { id: "food_cookie",            label: "Cookie",        imagePath: "/assets/stickers/food/sticker_food_cookie.png",       fallbackEmoji: "🍪" },
  { id: "food_egg",               label: "Egg",           imagePath: "/assets/stickers/food/sticker_food_egg.png",          fallbackEmoji: "🥚" },
  { id: "food_flour",             label: "Flour",         imagePath: "/assets/stickers/food/sticker_food_flour.png",        fallbackEmoji: "🌾" },
  { id: "food_garlic",            label: "Garlic",        imagePath: "/assets/stickers/food/sticker_food_garlic.png",       fallbackEmoji: "🧄" },
  { id: "food_herbs",             label: "Fresh Herbs",   imagePath: "/assets/stickers/food/sticker_food_herbs.png",        fallbackEmoji: "🌿" },
  { id: "food_lemon",             label: "Lemon",         imagePath: "/assets/stickers/food/sticker_food_lemon.png",        fallbackEmoji: "🍋" },
  { id: "food_mushroom",          label: "Mushroom",      imagePath: "/assets/stickers/food/sticker_food_mushroom.png",     fallbackEmoji: "🍄" },
  { id: "food_pie",               label: "Pie",           imagePath: "/assets/stickers/food/sticker_food_pie.png",          fallbackEmoji: "🥧" },
  { id: "food_sugar",             label: "Sugar",         imagePath: "/assets/stickers/food/sticker_food_sugar.png",        fallbackEmoji: "🍬" },
  { id: "food_tomato",            label: "Tomato",        imagePath: "/assets/stickers/food/sticker_food_tomato.png",       fallbackEmoji: "🍅" },

  // Seasonal
  { id: "seasonal_cherry",        label: "Cherry",        imagePath: "/assets/stickers/seasonal/sticker_seasonal_cherry.png",     fallbackEmoji: "🍒" },
  { id: "seasonal_holly",         label: "Holly",         imagePath: "/assets/stickers/seasonal/sticker_seasonal_holly.png",      fallbackEmoji: "🎄" },
  { id: "seasonal_leaves",        label: "Fall Leaves",   imagePath: "/assets/stickers/seasonal/sticker_seasonal_leaves.png",     fallbackEmoji: "🍂" },
  { id: "seasonal_pinecone",      label: "Pinecone",      imagePath: "/assets/stickers/seasonal/sticker_seasonal_pinecone.png",   fallbackEmoji: "🌲" },
  { id: "seasonal_pumpkin",       label: "Pumpkin",       imagePath: "/assets/stickers/seasonal/sticker_seasonal_pumpkin.png",    fallbackEmoji: "🎃" },
  { id: "seasonal_snowflake",     label: "Snowflake",     imagePath: "/assets/stickers/seasonal/sticker_seasonal_snowflake.png",  fallbackEmoji: "❄️" },
  { id: "seasonal_strawberry",    label: "Strawberry",    imagePath: "/assets/stickers/seasonal/sticker_seasonal_strawberry.png", fallbackEmoji: "🍓" },
  { id: "seasonal_sunflower",     label: "Sunflower",     imagePath: "/assets/stickers/seasonal/sticker_seasonal_sunflower.png",  fallbackEmoji: "🌻" },

  // Time
  { id: "time_15min",             label: "15 Min",        imagePath: "/assets/stickers/time/sticker_time_15min.png",       fallbackEmoji: "⏱️" },
  { id: "time_1hour",             label: "1 Hour",        imagePath: "/assets/stickers/time/sticker_time_1hour.png",       fallbackEmoji: "⏰" },
  { id: "time_30min",             label: "30 Min",        imagePath: "/assets/stickers/time/sticker_time_30min.png",       fallbackEmoji: "⏱️" },
  { id: "time_crowd",             label: "Feeds a Crowd", imagePath: "/assets/stickers/time/sticker_time_crowd.png",       fallbackEmoji: "👥" },
  { id: "time_portions",          label: "Portions",      imagePath: "/assets/stickers/time/sticker_time_portions.png",    fallbackEmoji: "🍽️" },
  { id: "time_serves4",           label: "Serves 4",      imagePath: "/assets/stickers/time/sticker_time_serves4.png",     fallbackEmoji: "👨‍👩‍👧‍👦" },
  { id: "time_serves8",           label: "Serves 8",      imagePath: "/assets/stickers/time/sticker_time_serves8.png",     fallbackEmoji: "🎉" },
  { id: "time_timer",             label: "Timer",         imagePath: "/assets/stickers/time/sticker_time_timer.png",       fallbackEmoji: "⏲️" },

  // Tools
  { id: "tools_apron",            label: "Apron",         imagePath: "/assets/stickers/tools/sticker_tools_apron.png",         fallbackEmoji: "👨‍🍳" },
  { id: "tools_bowl",             label: "Bowl",          imagePath: "/assets/stickers/tools/sticker_tools_bowl.png",          fallbackEmoji: "🥣" },
  { id: "tools_dutchoven",        label: "Dutch Oven",    imagePath: "/assets/stickers/tools/sticker_tools_dutchoven.png",     fallbackEmoji: "🍲" },
  { id: "tools_knife",            label: "Knife",         imagePath: "/assets/stickers/tools/sticker_tools_knife.png",         fallbackEmoji: "🔪" },
  { id: "tools_measuringcups",    label: "Measuring",     imagePath: "/assets/stickers/tools/sticker_tools_measuringcups.png", fallbackEmoji: "🥤" },
  { id: "tools_mixer",            label: "Mixer",         imagePath: "/assets/stickers/tools/sticker_tools_mixer.png",         fallbackEmoji: "🍦" },
  { id: "tools_rollingpin",       label: "Rolling Pin",   imagePath: "/assets/stickers/tools/sticker_tools_rollingpin.png",    fallbackEmoji: "🎲" },
  { id: "tools_skillet",          label: "Skillet",       imagePath: "/assets/stickers/tools/sticker_tools_skillet.png",       fallbackEmoji: "🍳" },
  { id: "tools_whisk",            label: "Whisk",         imagePath: "/assets/stickers/tools/sticker_tools_whisk.png",         fallbackEmoji: "🥄" },
  { id: "tools_woodenspoon",      label: "Wooden Spoon",  imagePath: "/assets/stickers/tools/sticker_tools_woodenspoon.png",   fallbackEmoji: "🥄" },
];
